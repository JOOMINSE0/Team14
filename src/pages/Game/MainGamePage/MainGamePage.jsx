import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../../component/Nav/Nav";
import Header from "../../../component/Header/Header";
import './MainGamePage.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const MainGamePage = () => {

    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setSelected(index);

        // 버튼 클릭 시 페이지로 이동
        if (index === 0) {
            navigate('/chimaeyebang');
        } else if (index === 1) {
            navigate('/chimaejindan');
        } else if (index === 2) {
            navigate('/chimaechiryo');
        }
    };

    return (
        <div>
            <Header />
            <div className="main-game-page-text-column content">

                <h2>즐거운 게임과 함께,</h2>
                <h2>치매를 예방하고, 진단하고, 치료해요!</h2>
                <div>
                    <button
                        className={`main-game-page-button ${selected === 0 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(0)}
                    >
                        치매를 예방할 수 있는 게임
                    </button>
                    <div className="sizedbox"></div>
                    <button
                        className={`main-game-page-button ${selected === 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        치매를 진단할 수 있는 게임
                    </button>
                    <div className="sizedbox"></div>
                    <button
                        className={`main-game-page-button ${selected === 2 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        치매를 치료할 수 있는 게임
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default MainGamePage;