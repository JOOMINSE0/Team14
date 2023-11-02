import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import people from '../../assets/people.svg';
import grandpa from '../../assets/grandpa.jpg';
import grandpa_black from '../../assets/grandpa_black.jpg';
import woman from '../../assets/woman.png';
import woman_curly from '../../assets/woman_curly.png';
import './ChangeCharacter.scss';

const ChangeCharacter = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용
    const [selectedImage, setSelectedImage] = useState(people); // 초기 이미지 선택

    const handleChangeImage = (newImage) => {
        // 이미지 변경 버튼을 누를 때 호출되는 함수
        setSelectedImage(newImage); // 선택한 이미지로 업데이트
    };

    const handleBack = () => {
        navigate('/main', { state: { selectedImage } });// 이미지 정보를 state에 전달
    };

    return (
        <div>
            <Header />
            <div className="content change-colum for-margin">
                <div>
                    <img
                        src={
                            selectedImage === people
                                ? people
                                : selectedImage === grandpa
                                    ? grandpa
                                    : selectedImage === grandpa_black
                                        ? grandpa_black
                                        : selectedImage === woman
                                            ? woman
                                            : woman_curly
                        }
                        alt="이미지"
                    />
                </div>
                <div className="content change-column">
                    <button onClick={() => handleChangeImage(people)} className="change-button">
                        할머니
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(grandpa)} className="change-button">
                        할아버지
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(grandpa_black)} className="change-button">
                        까만 할아버지
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(woman)} className="change-button">
                        여자
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(woman_curly)} className="change-button">
                        파마한 여자
                    </button>
                </div>
                <div className="sizedbox"></div>
                <div>
                    <button onClick={handleBack} className="change-back-button">
                        캐릭터 선택 완료
                    </button>
                </div>
                <Nav />
            </div>
        </div>
    );
};

export default ChangeCharacter;
