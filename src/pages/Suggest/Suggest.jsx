import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './Suggest.scss';
import sug1 from '../../assets/suggest1.jpg';
import sug2 from '../../assets/suggest2.jpg';
import sug3 from '../../assets/suggest3.jpg';
import sug4 from '../../assets/suggest4.jpg';
import sug5 from '../../assets/suggest5.jpg';
import sug6 from '../../assets/suggest6.jpg';
import sug7 from '../../assets/suggest7.jpg';
import sug8 from '../../assets/suggest8.jpg';
import sug9 from '../../assets/suggest9.jpg';
import sug10 from '../../assets/suggest10.jpg';
import sug11 from '../../assets/suggest11.jpg';
import sug12 from '../../assets/suggest12.jpg';
import sug13 from '../../assets/suggest13.png';

// 이미지 파일 경로의 배열
const imagePaths = [
    sug1,
    sug2,
    sug3,
    sug4,
    sug5,
    sug6,
    sug7,
    sug8,
    sug9,
    sug10,
    sug11,
    sug12,
    sug13,
];

// 화면 Main(메인화면) 컴포넌트를 만든다
const Suggest = () => {
    const divCount = 13; // 생성할 div의 개수
    const divs = Array.from({ length: divCount }, (_, index) => index);

    return (
        <div className="iphone-frame" style={{overflowY: 'auto'}}>
            <Header />
            <div className="content suggest-column page-animation">
                <div className="for-chimae-font">
                    <h2>치매와 함께 살아가는 분들을 위해</h2>
                    <h2>사회 제도, 좋은 병원, 준비물을 추천해요.</h2>
                </div>
                <div>
                    {divs.map((index) => (
                        <div key={index} className="custom-div">
                            <img src={imagePaths[index]} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="sizedbox-bottom"></div>
            <Nav />
        </div>
    );
};

export default Suggest;
