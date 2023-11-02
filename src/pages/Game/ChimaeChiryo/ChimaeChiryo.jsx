import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import Nav from "../../../component/Nav/Nav";
import Header from "../../../component/Header/Header";
import './ChimaeChiryo.scss';

class ChimaeChiryo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevWord: '',
            userInput: '',
            result: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ userInput: event.target.value });
    };

    handleSubmit = () => {
        const { prevWord, userInput } = this.state;

        if (userInput.length < 2 || userInput.length >= 6) {
            this.setState({ result: '2글자 이상 5글자 이하의 단어를 입력하셔야 합니다!' });
            return;
        }

        if (prevWord === '' || prevWord[prevWord.length - 1] === userInput[0]) {
            this.setState({
                prevWord: userInput,
                userInput: '',
                result: '계속하세요!',
            });
        } else {
            this.setState({
                result: '틀렸습니다! 다시 하기 버튼을 눌러서 재시작하세요!',
            });
        }
    };

    handleRestart = () => {
        this.setState({
            prevWord: '',
            userInput: '',
            result: '',
        });
    };

    render() {
        const { userInput, result } = this.state;

        return (
            <div>
                <Header />
                <div className="word-chain-game">
                    <h2>끝말잇기 게임입니다. 원하시는 단어를 입력하셔서 시작하세요!</h2>
                    <div>
                        <input
                            type="text"
                            value={userInput}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.handleSubmit} className="wordchain-button">입력 완료</button>
                    </div>
                    <div className="result">{result}</div>
                    <button onClick={this.handleRestart} className="wordchain-button">다시 하기</button>
                </div>
                <Nav />
            </div>
        );
    }
}

export default ChimaeChiryo;