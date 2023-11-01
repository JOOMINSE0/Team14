import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const WriteMyDiary = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는개인일기장에 일기를 작성하기 위한 일기 입력 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default WriteMyDiary;