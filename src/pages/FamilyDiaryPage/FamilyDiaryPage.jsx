import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './FamilyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';
import HeaderNavigation from "../../component/HeaderNavigation/HeaderNavigation";
import calender from '../../assets/diary_calander.svg';
import picture from '../../assets/icon_familypicture.jpg';

const FamiliDiaryPage = () => {

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

            <HeaderNavigation />
            <div className="content family-diary-column">
                <div className="for-chimae-font">
                    <h2>쑥스러워서 직접 말하지 못했던 속마음을 가족들에게 고백하세요.</h2>
                    <h2>함께 찍은 가족 사진, 동영상도 공유하면서 가족을 잊지 말아요.</h2>
                </div>
                <div className="family-diary-column">
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
                                깜빡한 게 많은 하루
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
                                치매에 걸렸어도 우리 딸 여전히 기억하고 사랑한다
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
                                우리 가족 저번에 설악산 갔을 때~^^
                            </div>
                            <img src={picture} alt="이미지" className="image" />
                        </button>
                        <button className='calender-row'>
                            <div className="calender-column">
                                <div>13</div>
                                <div>화</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                우리 가족 모두 힙을 냅시다. 할머니는 다시 건강해지실 거야...
                            </div>
                        </button>

                    </div>
                    <div className='sizedbox'></div>
                    <div>

                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            저번달
                        </div>
                        <button className='calender-row'>
                            <div className="calender-column">
                                <div>21</div>
                                <div>목</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                어머님 기억이 안날 땐 여길 보고 기억하세요.
                            </div>
                        </button>
                        <button className='calender-row'>
                            <div className="calender-column">
                                <div>19</div>
                                <div>화</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                옷 따뜻하게 입고 다녀야 합니다. 우리가족 !!
                            </div>
                        </button>
                    </div>
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
