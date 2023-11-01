import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './Suggest.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const Suggest = () => {
    const divCount = 13; // 생성할 div의 개수
    const divs = Array.from({ length: divCount }, (_, index) => index);

    return (
        <div>
            <Header />
            <div className="content suggest-column">
                <h2>치매와 함께 살아가는 분들을 위해</h2>
                <h2>사회 제도, 좋은 병원, 있으면 좋은 준비물들을 추천해드려요.</h2>
                <div>
                    {divs.map((index) => (
                        <div
                            key={index}
                            className="custom-div"
                        ></div>
                    ))}
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default Suggest;