import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 보험, 병원, 간병인, 사회제도를 추천해주는 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default Main;