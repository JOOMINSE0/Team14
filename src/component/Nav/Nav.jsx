import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navigation-bar">
            <button className="nav-button recommended">
                <Link to="/suggest" className="nav-link">추천</Link>
            </button>
            <button className="nav-button home">
                <Link to="/" className="nav-link">홈화면</Link>
            </button>
            <button className="nav-button game">
                <Link to="maingamepage" className="nav-link">게임</Link>
            </button>
        </div>
    );
}

export default Nav;