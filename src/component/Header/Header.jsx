import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Header.scss';
import { Link } from 'react-router-dom';
import remember_logo from '../../assets/logo_header_remember.svg';

function Header() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // 뒤로 가기
    };

    return (
        <div className="header-bar">
            <button className="header-button" onClick={goBack}>
                <FaArrowLeft />
            </button>

            <button className="header-button">
                <Link to="/main" className="mypage-link">
                    <img src={remember_logo} alt="이미지" />
                </Link>
            </button>

        </div>
    );
}

export default Header;
