import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './FamilyDiary_ex_3.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const FamilyDiary_ex_3 = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/familydiarypage');
    };

    const clickedmodify = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/modifyfamilydiary');
    };

    const clickeddelete = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        alert('가족일기가 삭제되었습니다!');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content clicked-family-diary-column">
                <h2>이렇게 일기가 작성되었어요.</h2>
                <div>
                    <p>우리 가족 저번에 설악산 갔을 때~^^</p>
                </div>
                <div className="sizedbox"></div>
                <div className="family-diary-pop">
                    작년 설악산 등산 때, 할머니도 우리 조카들도 신나게 걸었던 기억이 나네. 어머님도 이 사진 보시고 힘내요. 어머님 간병하느라 형수님도 너무 수고가 많으십니다. 우리 가족들 모두 파이팅입니다.^^
                </div>
                <div className="sizedbox"></div>
                <button className="clicked-family-diary-button" onClick={handleCompleteButtonClick}>
                    우리 가족 일기장 목록으로 돌아가기
                </button>
                <div className="sizedbox"></div>
                <div className="make-row">
                    <button className="modify" onClick={clickedmodify}>
                        수정하기
                    </button>
                    <div className="sizedbox-row"></div>
                    <button className="modify" onClick={clickeddelete}>
                        삭제하기
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default FamilyDiary_ex_3;