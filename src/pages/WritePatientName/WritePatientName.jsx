import React from "react";
import { useState } from 'react';
import './WritePatientName.scss';
import { useNavigate } from 'react-router-dom';
import alarm from '../../assets/alarm.png';
import remember from '../../assets/Remember.png';

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
        <div id="iphone-frame">
            <div id="logo-container">
            <img id='logo' src={remember} alt="remember" />
            <button id="alarm">
                <img src={alarm} alt="alarm" style={{ width: '18px', height: '20px'}} />
            </button>
            </div>


        <div className="write-patient-text">
            <div>
                <div style={{fontSize:"20px", display: "inline-block", marginTop:'70%'}}>성별은 
                <button className="genderBtn">남자</button>
                <button className="genderBtn">여자</button>
                </div>
            </div>

            
            <div style={{fontSize:"20px"}}>이름은
            <input style={{borderRadius: '50px', height:'35px', width:'100px', borderRadius: '50px',
                background: '#F4F4F4',
                boxShadow: '0px 0px 3.52351px 0px rgba(0, 0, 0, 0.20) inset', border:'none'}}
                className="patient-input"
                type="text"
                value={inputText_1}
                onChange={handleInputChange_1}
            /></div>
                
        

            
            <div>
                <h1 style={{fontSize:"20px"}}>치매 시기는</h1>
            </div>
            <div className="write-patient-row">
                <input style={{borderRadius: '50px', height:'35px', width:'100px', borderRadius: '50px',
                background: '#F4F4F4',
                boxShadow: '0px 0px 3.52351px 0px rgba(0, 0, 0, 0.20) inset', border:'none'}}
                    type="text"
                    value={inputText_2}
                    onChange={handleInputChange_2}
                />
                <p style={{fontSize:"20px"}}>월</p>
                <input style={{borderRadius: '50px', height:'35px', width:'100px', borderRadius: '50px',
                background: '#F4F4F4',
                boxShadow: '0px 0px 3.52351px 0px rgba(0, 0, 0, 0.20) inset', border:'none'}}
                    type="text"
                    value={inputText_3}
                    onChange={handleInputChange_3}
                />
                <p style={{fontSize:"20px"}}>일</p>
            </div>
            <h2 style={{fontSize:"20px", borderRadius: '50px'}}>입력된 치매 시작 날짜 <br/> {inputText_2}월 {inputText_3}일 부터 치매와 함께 하는 중</h2>
            <button className="write-text-button" onClick={handleCompleteButtonClick}>
                입력 완료
            </button>
        </div>
    </div>
    );
};

export default WritePatientName;