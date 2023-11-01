import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const WhatisChimae = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 치매에 대한 기본적인 개념과 지식을 정리한 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default WhatisChimae;