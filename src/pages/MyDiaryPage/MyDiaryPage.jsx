import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './MyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';
import HeaderNavigation from "../../component/HeaderNavigation/HeaderNavigation";
import calender from '../../assets/diary_calander.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiaryPage = () => {

    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleWriteMyDiaryClick = () => {
        // '+ 버튼' 클릭 시 '/writefamilydiary' 페이지로 이동
        navigate('/writemydiary');
    };

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />
            <HeaderNavigation />
            <div className="content my-diary-column">
                <div className="for-chimae-font">
                    <h2>가족들에게 고백하기 힘든 속마음을 적어보세요.</h2>
                    <h2>오늘 찍은 사진, 내 모습을 촬영한 동영상도 함께 기록해보세요.</h2>
                </div>
                <div className="my-diary-column">
                    <div>
                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            오늘
                        </div>
                        <button className='calender-row'>
                            <div className="calender-column">
                                <div>21</div>
                                <div>수</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                가족들에게 미안했던 하루...
                            </div>
                        </button>
                    </div>
                    <div className="sizedbox"></div>
                    <div>
                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            어제
                        </div>
                        <button className='calender-row'>
                            <div className="calender-column">
                                <div>20</div>
                                <div>화</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                나중에 나도 대소변을 못가리게 될까?
                            </div>
                        </button>
                    </div>
                    <div className="sizedbox"></div>
                    <div>
                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            지난주
                        </div>
                        <button className='calender-row'>
                            <div className="calender-column">
                                <div>17</div>
                                <div>토</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                아들에게는 말 못하지만, 너무 섭섭했다...
                            </div>
                        </button>
                        <button className='calender-row'>
                            <div className="calender-column">
                                <div>13</div>
                                <div>화</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                며느리는 딸이 될 수 없구나..
                            </div>
                        </button>
                    </div>
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