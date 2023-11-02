import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // 뒤로 가기
    };

    return (
        <div className="header-bar">
            <button className="header-button" onClick={goBack}>
                <FaArrowLeft /> 뒤로가기
            </button>

            <button className="header-button">
                <Link to="/main" className="mypage-link">리멤버: 잊지 말아요</Link>
            </button>
            <button className="header-button">
                <Link to="/mypage" className="mypage-link">마이페이지</Link>
            </button>
        </div>
    );
}

export default Header;
