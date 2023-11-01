import React from "react";
import Nav from "../../component/Nav/Nav";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {

    return (
        <div>
            <p>여기는 로그인 페이지입니다. 가족 일기장 기능을 사용할 때만 로그인하면 됩니다.</p>
            <Nav />
        </div>
    );
};

export default Main;