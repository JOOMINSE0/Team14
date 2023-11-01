import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const InviteById = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 가족일기장에 초대할 가족 멤버를 아이디로 검색해서 초대하는 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default InviteById;