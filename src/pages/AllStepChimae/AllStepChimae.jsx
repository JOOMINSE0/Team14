import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const AllStepChimae = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 치매의 모든 단계적 증상과 준비물을 모아둔 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default AllStepChimae;