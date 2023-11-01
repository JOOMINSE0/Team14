import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { Link } from 'react-router-dom';
import './Main.scss';
import people from '../../assets/people.svg';
import balloon from '../../assets/talkballoon.svg';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleCompleteButtonClick_character = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/main'); //페이지 만들어야함(캐릭터 바꾸는 페이지)
    };
    const handleCompleteButtonClick_whatischimae = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/main'); //페이지 만들어야함(캐릭터 바꾸는 페이지)
    };
    const handleCompleteButtonClick_allthing = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/main'); //페이지 만들어야함(캐릭터 바꾸는 페이지)
    };

    return (
        <div>
            <Header />
            <div className="for-margin">
                <div className="content main-column">

                    <div className="image-container main-row">
                        <div className="main-column">
                            <img src={people} alt="이미지" className="image-overlay-people" />
                            <button className="character-button" onClick={handleCompleteButtonClick_character}>
                                캐릭터 바꾸기
                            </button>
                        </div>
                        <div>
                            <img src={balloon} alt="이미지" className="image-overlay-balloon" />

                            <div className="text-overlay">동트기 전이 가장 어두운 거래. 오늘도 파이팅!</div>

                        </div>
                    </div>
                    <div>
                        <div className="main-row">
                            <h2>홍길동</h2>
                            <h2>님</h2>
                        </div>

                        <div className="main-row">
                            <h2>치매와 함께한지</h2>
                            <h2>377</h2>
                            <h2>일 째</h2>
                        </div>
                    </div>
                    <button className="chimae-button" onClick={handleCompleteButtonClick_whatischimae}>
                        치매란 어떤 병인가요?
                    </button>
                    <div className="sizedbox"></div>
                    <button className="chimae-button" onClick={handleCompleteButtonClick_allthing}>
                        치매 단계별 증상/준비물 모두 보기
                    </button>
                    <div className="sizedbox"></div>
                    <div className="main-row">
                        <h2>홍길동</h2>
                        <h2>님의 이맘때 증상과 준비물을 알려드릴게요.</h2>
                    </div>
                    <div className="main-column">
                        <h1>증상</h1>
                        <p>오래 전에 경험했던 일은 잘 기억하나, 조금 전에 했던 일 또는 생각을 자주 잊어버린다.</p>
                        <p>음식을 조리하다가 불 끄는 것을 잊어버리는 경우가 빈번해진다.</p>
                        <p>평소 잘 알던 사람의 이름이 생각나지 않는다.</p>
                        <h1>준비물</h1>
                        <h2>메모장, 볼펜</h2>
                        <p>메모장과 볼펜을 가지고 다니면서 잊어버리는 것들을 적어놓으세요.</p>
                    </div>
                </div>

            </div >
            <Nav />
        </div>
    );
};

export default Main;