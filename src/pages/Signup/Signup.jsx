import React, { useState } from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [inputText_1, setInputText_1] = useState(''); // 초기값 설정(아이디)
    const [inputText_2, setInputText_2] = useState(''); // 초기값 설정(비밀번호)
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange_1 = (e) => {
        setInputText_1(e.target.value);
    };

    const handleInputChange_2 = (e) => {
        setInputText_2(e.target.value);
    };

    const handleCompleteButtonClick = async () => {
        try {
            // 회원가입 요청 보내기
            const response = await axios.post('https://port-0-likelion-myrrhthon-back-1igmo82clos9yp4o.sel5.cloudtype.app/', {
                username: inputText_1,
                password: inputText_2
            });

            // 회원가입 성공 시 처리
            alert('성공적으로 회원가입되었습니다!');
            navigate('/login');
        } catch (error) {
            // 회원가입 실패 시 처리
            console.error('회원가입 실패', error);
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const handleCompleteButtonClick_check_ok = () => {
        // 사용 가능한 아이디인지 검사하는 로직 추가
        alert('사용 가능한 아이디입니다!');
    };

    return (
        <div className="iphone-frame">
            <Header /><br/>
            <div className="content signup-column">
                <div>
                    <p>사용하실 아이디를 입력해주세요.</p>
                    <input
                        className="signup-input"
                        type="text"
                        value={inputText_1}
                        onChange={handleInputChange_1}
                    />
                    <div className="sizedbox"></div>
                    <p>사용하실 비밀번호를 입력해주세요.</p>
                    <input
                        className="signup-input"
                        type="password"
                        value={inputText_2}
                        onChange={handleInputChange_2}
                    />
                    <p>다른 사람과 아이디가 똑같은지 검사해야 해요.</p>
                    <button className="check-button" onClick={handleCompleteButtonClick_check_ok}>
                        아이디 중복 검사 하기
                    </button>
                    <div className="sizedbox"></div>
                    <button className="signup-button" onClick={handleCompleteButtonClick}>
                        회원가입 하기
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default Signup;
