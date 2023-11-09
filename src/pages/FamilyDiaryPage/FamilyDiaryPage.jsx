import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './FamilyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';

const FamiliDiaryPage = () => {
    const buttonCount = 13; // 생성할 버튼의 개수
    const buttons = Array.from({ length: buttonCount }, (_, index) => index);

    const navigate = useNavigate();

    const handleWriteFamilyDiaryClick = () => {
        navigate('/writefamilydiary');
    };

    const handleWriteFamilyDiaryClick_invite = () => {
        navigate('/invitebyid');
    };

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />
            <div className="content family-diary-column">
                <div className="for-chimae-font">
                    <h2>쑥스러워서 직접 말하지 못했던 속마음을 가족들에게 고백하세요.</h2>
                    <h2>함께 찍은 가족 사진, 동영상도 공유하면서 가족을 잊지 말아요.</h2>
                </div>
                <div className="family-diary-column">
                    {buttons.map((index) => (
                        <button
                            key={index}
                            className="family-diary"
                            onClick={() => navigate('/clickedfamilydiary')}
                        >
                            {/* 버튼 내용을 여기서 추가하면 됨*/}
                            {index}번째 가족 일기
                        </button>
                    ))}
                </div>
            </div>
            <button className="fixed-button" onClick={handleWriteFamilyDiaryClick}>
                <span>+</span>
            </button>
            <button className="invite-button" onClick={handleWriteFamilyDiaryClick_invite}>
                <span>
                    <p>가족</p>
                    <p>초대</p>
                </span>
            </button>
            <Nav />
        </div>
    );
};

export default FamiliDiaryPage;
