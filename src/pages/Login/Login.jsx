import React, { useState } from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [inputText_1, setInputText_1] = useState('');
    const [inputText_2, setInputText_2] = useState('');
    const navigate = useNavigate();

    const handleInputChange_1 = (e) => {
        setInputText_1(e.target.value);
    };

    const handleInputChange_2 = (e) => {
        setInputText_2(e.target.value);
    };

    const handleCompleteButtonClick = async () => {
        try {
            // 로그인 요청 보내기
            const response = await axios.post('https://port-0-likelion-myrrhthon-back-1igmo82clos9yp4o.sel5.cloudtype.app/', {
                username: inputText_1,
                password: inputText_2
            });

            // 서버에서 받은 JWT 토큰을 로컬 스토리지에 저장
            const token = response.data.token;
            localStorage.setItem('token', token);

            alert('성공적으로 로그인되었습니다!');
            navigate('/main');
        } catch (error) {
            // 로그인 실패 시 처리
            console.error('로그인 실패', error);
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const handleCompleteButtonClick_signup = () => {
        navigate('/signup');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content login-column">
                <div>
                    <p>아이디를 입력해주세요.</p>
                    <div className="sizedbox"></div>
                    <input
                        className="login-input"
                        type="text"
                        value={inputText_1}
                        onChange={handleInputChange_1}
                    />
                    <div className="sizedbox"></div>
                    <p>비밀번호를 입력해주세요.</p>
                    <input
                        className="login-input"
                        type="password"
                        value={inputText_2}
                        onChange={handleInputChange_2}
                    />
                    <p>처음 이용하시는 건가요?</p>
                    <button className="go-to-signup-button" onClick={handleCompleteButtonClick_signup}>
                        회원가입 하러 가기
                    </button>
                    <div className="sizedbox"></div>
                    <button className="login-button" onClick={handleCompleteButtonClick}>
                        로그인 하기
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default Login;
