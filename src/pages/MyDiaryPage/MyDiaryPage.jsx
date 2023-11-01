import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiaryPage = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 개인 일기장, 즉 환자 또는 보호자 개인만 일기를 읽고 쓸 수 있는 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default MyDiaryPage;