import React from "react";
import { useState } from 'react';
import './WritePatientName.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const WritePatientName = () => {

    const [inputText_1, setInputText_1] = useState(''); // 초기값 설정(이름)
    const [inputText_2, setInputText_2] = useState(''); // 초기값 설정(날짜. 월)
    const [inputText_3, setInputText_3] = useState(''); // 초기값 설정(날짜. 일)
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange_1 = (e) => {
        setInputText_1(e.target.value);
    };

    const handleInputChange_2 = (e) => {
        setInputText_2(e.target.value);
    };

    const handleInputChange_3 = (e) => {
        setInputText_3(e.target.value);
    };

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/main');
    };


    return (
        <div className="write-patient-text">
            <div>
                <h1>치매 환자분의 성함을 작성해주세요.</h1>
            </div>
            <div>
                <input
                    className="patient-input"
                    type="text"
                    value={inputText_1}
                    onChange={handleInputChange_1}
                />
                <p>입력된 환자분의 성함: {inputText_1}</p>
            </div>
            <div>
                <h1>치매가 시작된 날짜를 적어주세요.</h1>
            </div>
            <div className="write-patient-row">
                <input
                    type="text"
                    value={inputText_2}
                    onChange={handleInputChange_2}
                />
                <p>월</p>
                <input
                    type="text"
                    value={inputText_3}
                    onChange={handleInputChange_3}
                />
                <p>일</p>
            </div>
            <h2>입력된 치매 시작 날짜: {inputText_2}월 {inputText_3}일 부터 치매와 함께 하는 중</h2>
            <button className="write-text-button" onClick={handleCompleteButtonClick}>
                입력 완료
            </button>
        </div>
    );
};

export default WritePatientName;