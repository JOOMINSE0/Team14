import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './ChoosePosition.scss';

const ChoosePosition = () => {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setSelected(index);

        // 환자 또는 보호자 버튼 클릭 시 페이지로 이동
        if (index === 0) {
            navigate('/writepatientname');
        } else if (index === 1) {
            navigate('/writepatientname');
        }
    };

    return (
        <div className="iphone-frame">
            <h1 className="position-text">환자이신가요, 보호자이신가요?</h1>
            <div className="position-text">
                <button
                    className={`position-button ${selected === 0 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(0)}
                >
                    환자
                </button>
                <div className="sizedbox"></div>
                <button
                    className={`position-button ${selected === 1 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    보호자
                </button>
            </div>
        </div>
    );
};

export default ChoosePosition;
