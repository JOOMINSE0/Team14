import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const FamiliDiaryPage = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 가족일기장 일기 목록을 보여주는 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default FamiliDiaryPage;