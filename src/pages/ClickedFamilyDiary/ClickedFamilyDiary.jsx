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
        <div className="iphone-frame">
            <Header />
            <div className="content clicked-family-diary-column">
                <h2>이렇게 일기가 작성되었어요.</h2>
                <div>
                    <p>우리 가족 모두 힘내자!!</p>
                </div>
                <div className="sizedbox"></div>
                <div className="family-diary-pop">
                    우리 가족이 힘을 합치면 할머니의 치매를 이겨낼 수 있을거야. 우리 가족 사랑한다. 파이팅!
                </div>
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