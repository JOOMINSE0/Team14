import Nav from "../../../component/Nav/Nav";
import Header from "../../../component/Header/Header";
import React, { useState, useEffect } from 'react';
import './ChimaeYebang.scss';

const ChimaeYebang = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [circles, setCircles] = useState([]);
    const gameDuration = 30; // 30초 동안 게임이 진행됨
    const minCircleRadius = 1; // 최소 지름 1
    const maxCircleRadius = 4; // 최대 지름 4

    useEffect(() => {
        let gameInterval;
        if (!gameOver) {
            gameInterval = setInterval(() => {
                const circle = createRandomCircle();
                setCircles((prevCircles) => [...prevCircles, circle]);
            }, getRandomTime(1, 5) * 1000);
        }

        return () => clearInterval(gameInterval);
    }, [gameOver]);

    useEffect(() => {
        if (!gameOver) {
            const timer = setTimeout(() => {
                setGameOver(true);
            }, gameDuration * 1000);

            return () => clearTimeout(timer);
        }
    }, [gameOver]);

    const createRandomCircle = () => {
        const radius = getRandomSize(minCircleRadius, maxCircleRadius);
        const top = getRandomPosition(0, window.innerHeight - radius * 2);
        const left = getRandomPosition(0, window.innerWidth - radius * 2);
        const duration = getRandomTime(2, 5);
        const color = getRandomColor();

        return {
            radius,
            top,
            left,
            duration,
            color,
        };
    };

    const getRandomSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomPosition = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomTime = (min, max) => Math.random() * (max - min) + min;
    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const handleCircleClick = (circleIndex) => {
        const updatedCircles = [...circles];
        updatedCircles.splice(circleIndex, 1);
        setCircles(updatedCircles);
        setScore(score + 1);
    };

    const resetGame = () => {
        setScore(0);
        setCircles([]);
        setGameOver(false);
    };

    return (
        <div className="content">
            <Header />
            <div className="game-container">
                <h1>박 터뜨리기 게임</h1>
                <h2>마구잡이로 생겨나는 동그란 박을 눌러서 터뜨리고 점수를 얻어요.</h2>
                <h2>제한시간은 30초, 박 하나 당 1점입니다!</h2>
                <p>점수: {score}점</p>
                {gameOver && <p>게임 종료!</p>}
                {circles.map((circle, index) => (
                    <div
                        key={index}
                        className="circle"
                        style={{
                            width: `${circle.radius * 2}cm`,
                            height: `${circle.radius * 2}cm`,
                            top: circle.top,
                            left: circle.left,
                            backgroundColor: circle.color,
                            animation: `circleAnimation ${circle.duration}s linear`,
                        }}
                        onClick={() => handleCircleClick(index)}
                    ></div>
                ))}
                <button onClick={resetGame} className="button">다시 시작</button>
            </div>
            <Nav />
        </div>
    );
};

export default ChimaeYebang;