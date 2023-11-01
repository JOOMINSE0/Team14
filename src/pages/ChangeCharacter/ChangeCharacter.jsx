import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const ChangeCharacter = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 홈화면의 캐릭터를 선택해서 바꿀 수 있는 페이지입니다.</p>
            </div>
            <Nav />
        </div>
    );
};

export default ChangeCharacter;