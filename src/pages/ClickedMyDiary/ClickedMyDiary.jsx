import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './ClickedMyDiary.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const ClickedMyDiary = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/mydiarypage');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content clicked-my-diary-column">
                <h2>이렇게 일기가 작성되었어요.</h2>
                <div>
                    <p>사실은 너무 두렵다.</p>
                </div>
                <div className="my-diary-pop">
                    열심히 응원해주는 가족들에게는 말을 못하겠다. 사실 너무 무섭다. 언젠가는 모든 기억을 잃어버리게 되는 건 아닌지, 대소변을 못가리게 되면 어쩌지... 너무 무섭다.
                </div>
                <div className="sizedbox"></div>
                <button className="clicked-my-diary-button" onClick={handleCompleteButtonClick}>
                    나의 일기장 목록으로 돌아가기
                </button>
            </div>
            <Nav />
        </div>
    );
};

export default ClickedMyDiary;