import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './ClickedFamilyDiary.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const ChooseFamilyDiary = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/familydiarypage');
    };

    return (
        <div>
            <Header />
            <div className="content clicked-family-diary-column">
                <p>여기는 가족일기장의 일기 하나를 클릭했을 때 보여주는 페이지입니다.</p>
                <div className="family-diary-pop"></div>
                <div className="sizedbox"></div>
                <button className="clicked-family-diary-button" onClick={handleCompleteButtonClick}>
                    우리 가족 일기장 목록으로 돌아가기
                </button>
            </div>
            <Nav />
        </div>
    );
};

export default ChooseFamilyDiary;