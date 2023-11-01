import React from "react";
import Nav from "../../../component/Nav/Nav";
import Header from "../../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는치매 예방, 치매 진단, 치매 치료 중 하나를 선택할 수 있는 메인 게임 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default Main;