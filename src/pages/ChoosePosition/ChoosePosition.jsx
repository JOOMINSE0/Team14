import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './ChoosePosition.scss';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

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
            <Header />
            <h1 className="position-text" style={{fontSize:'24px'}}>환자이신가요, 보호자이신가요?</h1>

                <button

                    className={`position-button ${selected === 0 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(0)}
                >
                    환자
                </button>
                <br/>
                <button style={{height:'60px', width:'314px'}}
                    className={`position-button ${selected === 1 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    보호자
                </button>
                <Nav/>
            </div>
       
    );
};

export default ChoosePosition;
