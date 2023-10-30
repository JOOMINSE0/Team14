import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";

function Nav() {
    // const navigate = useNavigate(); // useNavigate를 사용해서 navigate 객체를 가져온다.

    // const handleButtonClick = (path) => {
    //     navigate(path); // navigate 함수를 사용해서 경로를 변경
    // };

    return (
        <div>
            <div className="Nav">
                <button
                    className="childNav"
                    onClick={() => console.log('left_clicked!')}
                    style={{ justifyContent: "start", paddingLeft: "20px" }}
                >

                    <div className="SizedBox" style={{ width: "10px" }}></div>
                    <span>홈화면</span>
                </button>

                <button
                    className="childNav"
                    onClick={() => console.log('right_clicked!')}
                    style={{ justifyContent: "end", paddingRight: "20px" }}
                >
                    <span>제안</span>
                    <div className="SizedBox" style={{ width: "10px" }}></div>

                </button>
            </div>
            <button
                className="nav-button-style"
                onClick={() => console.log('middle_clicked!')}
                style={{ fontSize: 20, color: "red" }}
            >
            </button>
            <div className="AR">
                <a className="h2">게임</a>
            </div>

        </div>
    );
}

export default Nav;