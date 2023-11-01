import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './FamilyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const FamiliDiaryPage = () => {
    const divCount = 13; // 생성할 div의 개수
    const divs = Array.from({ length: divCount }, (_, index) => index);

    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleWriteFamilyDiaryClick = () => {
        // '+ 버튼' 클릭 시 '/writefamilydiary' 페이지로 이동
        navigate('/writefamilydiary');
    };

    return (
        <div>
            <Header />
            <div className="content family-diary-column">
                <h2>쑥스러워서 직접 말하지 못했던 속마음을 가족들에게 고백하세요.</h2>
                <h2>함께 찍은 가족 사진, 동영상도 공유하면서 가족을 잊지 말아요.</h2>
                <div>
                    {divs.map((index) => (
                        <div
                            key={index}
                            className="family-diary"
                        ></div>
                    ))}
                </div>
            </div>
            <button className="fixed-button" onClick={handleWriteFamilyDiaryClick}>
                <span>+</span>
            </button>
            <Nav />
        </div>
    );
};

export default FamiliDiaryPage;