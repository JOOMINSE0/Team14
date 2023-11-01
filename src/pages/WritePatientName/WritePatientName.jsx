import React from "react";
import { useState } from 'react';
import './WritePatientName.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const WritePatientName = () => {

    const [inputText, setInputText] = useState(''); // 초기값 설정
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange = (e) => {
        setInputText(e.target.value);
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
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <p>입력된 환자분의 성함: {inputText}</p>
            </div>
            <button className="write-text-button" onClick={handleCompleteButtonClick}>
                입력 완료
            </button>
        </div>
    );
};

export default WritePatientName;