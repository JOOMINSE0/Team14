import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { Link } from 'react-router-dom';
import './Main.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 홈화면입니다. 사람 이모티콘, 응원 멘트 네비바 등등...</p>
            </div>
            <Nav />
        </div>
    );
};

export default Main;