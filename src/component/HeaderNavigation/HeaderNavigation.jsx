import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './HeaderNavigation.scss';

function HeaderNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div className="header-navigation" style={{ width: '390px', height: '50px' }}>
            <button
                className={`navigation-button ${location.pathname === '/familydiarypage' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/familydiarypage')}
            >
                가족 일기장
            </button>
            <button
                className={`navigation-button ${location.pathname === '/mydiarypage' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/mydiarypage')}
            >
                나만의 일기장
            </button>
        </div>
    );
}

export default HeaderNavigation;
