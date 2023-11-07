import React, { useState } from 'react';
import Nav from "../../../component/Nav/Nav";
import Header from "../../../component/Header/Header";
import './ChimaeJindan.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const ChimaeJindan = () => {
    const [checkedCount, setCheckedCount] = useState(0);
    const navigate = useNavigate();

    const handleCheckboxClick = () => {
        setCheckedCount(checkedCount + 1);
    };

    const handleDiagnose = () => {
        if (checkedCount < 3) {
            navigate('/youareok');
        } else if (checkedCount < 6) {
            navigate('/watchout');
        } else if (checkedCount < 10) {
            navigate('/youaredanger');
        }
    };

    return (
        <div className="content jindan-column iphone-frame">
            <Header />
            <div className="for-chimae-font">
                <h2>해당하는 항목에 체크해보세요.</h2>
                <h2>최근 3개월 간 있었던 증상을 기억해보세요.</h2>
            </div>
            <div className="app-container">
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>직업이나 일상생활에 영향을 초래할 정도로 최근 일에 대한 기억력 이상이 있다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>언어사용이 어려워졌다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>시간과 장소를 혼동한다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>판단력이 저하되어 그릇된 판단을 자주한다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>익숙한 일을 처리하는데 어려움이 있다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>돈 계산에 문제가 생겼다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>물건 간수를 잘 못한다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>기분이나 행동에 변화가 왔다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>성격의 변화가 있다.</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={handleCheckboxClick} />
                    <label>자발성이 감소되었다.</label>
                </div>
                <button onClick={handleDiagnose} className="jindan-button">진단하기</button>
            </div>
            <Nav />
        </div>
    );
};

export default ChimaeJindan;