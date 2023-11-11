import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useState } from 'react';
import './WriteFamilyDiary.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const WriteFamilyDiary = () => {
    const [inputText, setInputText] = useState(''); // 초기값 설정(이름)
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleInputChange_title = (e) => {
        setInputText(e.target.value);
    };

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/clickedfamilydiary');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content write-family-diary-column">
                <div className="for-chimae-font">
                    <h2>가족들과 함께 볼 수 있는 일기장이에요.</h2>
                    <h2>오늘 하루는 어땠나요?</h2>
                </div>
                <div className='for-chimae-font'> <p>일기의 제목을 지어주세요.</p> </div>
                <div>
                    <textarea
                        className="my-diary-title-input"
                        type="text"
                        value={inputText}
                        onChange={handleInputChange_title}>
                    </textarea>
                </div>
                <div>
                    <textarea
                        className="family-diary-input"
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="sizedbox"></div>
                <button className="write-family-diary-button" onClick={handleCompleteButtonClick}>
                    입력 완료
                </button>
            </div>
            <Nav />
        </div>
    );
};

export default WriteFamilyDiary;