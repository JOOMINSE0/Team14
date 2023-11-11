import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './MyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';
import HeaderNavigation from "../../component/HeaderNavigation/HeaderNavigation";
import calender from '../../assets/diary_calander.svg';
import flower from '../../assets/flower.jpg';
import icon_profile_4 from '../../assets/icon_profile_4.jpg';
import icon_profile_5 from '../../assets/icon_profile_5.jpg';
import icon_profile_6 from '../../assets/icon_profile_6.jpg';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiaryPage = () => {

    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleWriteMyDiaryClick = () => {
        // '+ 버튼' 클릭 시 '/writefamilydiary' 페이지로 이동
        navigate('/writemydiary');
    };

    const move_ex_1 = () => {
        navigate('/mydiary_ex_1');
    };
    const move_ex_2 = () => {
        navigate('/mydiary_ex_2');
    };
    const move_ex_3 = () => {
        navigate('/mydiary_ex_3');
    };
    const move_ex_4 = () => {
        navigate('/mydiary_ex_4');
    };
    const move_ex_5 = () => {
        navigate('/mydiary_ex_5');
    };
    const move_ex_6 = () => {
        navigate('/mydiary_ex_6');
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

                        <button className='calender-row' onClick={move_ex_5}>
                            <div className="calender-column">
                                <div>12</div>
                                <div>일</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                며느리와 가족들에게 미안한 나날의 연속...
                                <img src={icon_profile_5} alt="이미지" className="image" />
                            </div>
                        </button>
                        <button className='calender-row' onClick={move_ex_6}>
                            <div className="calender-column">
                                <div>12</div>
                                <div>일</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                내가 죽고 나면 아들이, 며느리가 나를 기억해주기를..
                                <img src={icon_profile_6} alt="이미지" className="image" />
                            </div>
                        </button>
                        <button className='calender-row' onClick={move_ex_1}>
                            <div className="calender-column">
                                <div>12</div>
                                <div>일</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                가족들에게 미안했던 하루... 창피했다.
                                <img src={flower} alt="이미지" className="image" />
                            </div>
                        </button>
                    </div>
                    <div className="sizedbox"></div>
                    <div>
                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            어제
                        </div>
                        <button className='calender-row' onClick={move_ex_2}>
                            <div className="calender-column">
                                <div>11</div>
                                <div>토</div>
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
                        <button className='calender-row' onClick={move_ex_3}>
                            <div className="calender-column">
                                <div>10</div>
                                <div>금</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                아들에게는 말 못하지만, 너무 섭섭했다...
                            </div>
                        </button>
                        <button className='calender-row' onClick={move_ex_4}>
                            <div className="calender-column">
                                <div>10</div>
                                <div>금</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                며느리는 딸이 될 수 없다.. 씁쓸하다.
                                <img src={icon_profile_4} alt="이미지" className="image" />
                            </div>
                        </button>
                        <div className="sizedbox"></div>
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