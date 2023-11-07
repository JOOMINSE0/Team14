import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navigation-bar">
            <button className="nav-button recommended">
                <Link to="/suggest" className="nav-link">정보</Link>
            </button>
            <button className="nav-button home">
                <Link to="/main" className="nav-link">홈화면</Link>
            </button>
            <button className="nav-button game">
                <Link to="/maingamepage" className="nav-link">퀴즈</Link>
            </button>
            <button className="nav-button mypage">
                <Link to="/mypage" className="nav-link">마이페이지</Link>
            </button>
        </div>
    );
}

export default Nav;