import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './MyPage.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyPage = () => {

    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setSelected(index);

        // 버튼 클릭 시 페이지로 이동
        if (index === 0) {
            navigate('/familydiarypage');
        } else if (index === 1) {
            navigate('/mydiarypage');
        } else if (index === 2) {
            navigate('/login');
        } else if (index === 3) {
            navigate('/logout');
        } else if (index === 4) {
            navigate('/signup');
        } else if (index === 5) {
            navigate('/deleteaccount');
        }
    };

    return (
        <div className="iphone-frame">
            <Header />
            <br/>
            <div className="my-page-text-column content">
                <div className="my-page-text-row for-chimae-font">
                    <h2>반가워요,</h2>
                    <h2>홍길동님!</h2>
                    <h2>오늘도 건강하세요.</h2>
                </div>
                <div>
                    <button
                        className={`my-page-button ${selected === 0 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(0)}
                    >
                        가족끼리 나눠 보는 일기장
                    </button>
                    <div className="sizedbox"></div>
                    <button
                        className={`my-page-button ${selected === 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        나 혼자 보는 일기장
                    </button>
                    <div className="sizedbox"></div>
                    <button
                        className={`my-page-button ${selected === 2 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        로그인
                    </button>
                    <div className="sizedbox"></div>
                    <button
                        className={`my-page-button ${selected === 3 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        로그아웃
                    </button>
                    <div className="sizedbox"></div>
                    <button
                        className={`my-page-button ${selected === 4 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(4)}
                    >
                        회원 가입하기
                    </button>
                    <div className="sizedbox"></div>
                    <button
                        className={`my-page-button ${selected === 5 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(5)}
                    >
                        회원 탈퇴하기
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default MyPage;