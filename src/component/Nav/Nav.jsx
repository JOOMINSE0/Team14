import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import home from '../../assets/icon_nav_mainpage.svg';
import hospital from '../../assets/icon_hospital.svg';
import puzzle from '../../assets/icon_nav_puzzle.svg';
import bag from '../../assets/icon_nav_mypage.svg';

function Nav() {
    return (
        <div className="navigation-bar">
            <button className="nav-button recommended">
                <Link to="/main" className="nav-link">
                    <div className="nav-column nav-font">
                        <img src={home} alt="이미지" />
                        메인페이지
                    </div>
                </Link>
            </button>
            <button className="nav-button home">
                <Link to="/suggest" className="nav-link">
                    <div className="nav-column nav-font">
                        <img src={hospital} alt="이미지" />
                        정보
                    </div>
                </Link>
            </button>
            <button className="nav-button game">
                <Link to="/maingamepage" className="nav-link">
                    <div className="nav-column nav-font">
                        <img src={puzzle} alt="이미지" />
                        퀴즈
                    </div>
                </Link>
            </button>
            <button className="nav-button mypage">
                <Link to="/mypage" className="nav-link">
                    <div className="nav-column nav-font">
                        <img src={bag} alt="이미지" />
                        마이페이지
                    </div>
                </Link>
            </button>
        </div>
    );
}

export default Nav;