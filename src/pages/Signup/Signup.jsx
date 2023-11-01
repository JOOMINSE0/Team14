import React from "react";
import Nav from "../../component/Nav/Nav";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {

    return (
        <div>
            <p>여기는 회원가입 페이지입니다. 가족일기장 기능을 사용할 경우에만 회원가입하면 됩니다.</p>
            <Nav />
        </div>
    );
};

export default Main;