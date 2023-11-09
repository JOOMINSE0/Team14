import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './MyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiaryPage = () => {
    const buttonCount = 13; // 생성할 버튼의 개수
    const buttons = Array.from({ length: buttonCount }, (_, index) => index);

    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleWriteMyDiaryClick = () => {
        // '+ 버튼' 클릭 시 '/writefamilydiary' 페이지로 이동
        navigate('/writemydiary');
    };

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />
            <div className="content my-diary-column">
                <div className="for-chimae-font">
                    <h2>가족들에게 고백하기 힘든 속마음을 적어보세요.</h2>
                    <h2>나만 볼 수 있는 일기장이에요.</h2>
                    <h2>오늘 찍은 사진, 내 모습을 촬영한 동영상도 함께 기록해보세요.</h2>
                </div>
                <div className="my-diary-column">
                    {buttons.map((index) => (
                        <button
                            key={index}
                            className="my-diary"
                            onClick={() => navigate('/clickedmydiary')}
                        >
                            {index}번째 나만의 일기
                        </button>
                    ))}
                </div>
                <button className="fixed-button" onClick={handleWriteMyDiaryClick}>
                    <span>+</span>
                </button>
            </div>

            <Nav />
        </div>
    );
};

export default MyDiaryPage;