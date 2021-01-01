import React, { useEffect, useState } from "react";
import Card from "./Card";

function Game() {
    const [things, setThings] = useState([
        {
            id: "1",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "50",
                ry: "50",
            },
        },
        {
            id: "2",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "40",
                ry: "50",
            },
        },
        {
            id: "3",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "50",
                ry: "40",
            },
        },
        {
            id: "4",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "40",
                ry: "40",
            },
        },
        {
            id: "5",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "45",
                ry: "45",
            },
        },
        {
            id: "6",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "35",
                ry: "45",
            },
        },
        {
            id: "7",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "45",
                ry: "35",
            },
        },
        {
            id: "8",
            clicked: false,
            svg: {
                cx: "50",
                cy: "50",
                rx: "35",
                ry: "35",
            },
        },
    ]);

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState("go for it!");

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function scrambleThings() {
        let newThings = [...things];
        shuffleArray(newThings);
        setThings(newThings);
    }

    function handleClick(id) {
        let newGameOver = gameOver;
        let index = things.findIndex((ele) => ele.id === id);
        if (!newGameOver) {
            if (things[index].clicked) {
                newGameOver = true;
                setGameOver(newGameOver);
                setMessage("too bad, mate");
            } else {
                things[index].clicked = true;
                let newScore = score + 1;
                setScore(newScore);
                if (newScore > highScore) {
                    setHighScore(newScore);
                }
                if (newScore === things.length) {
                    newGameOver = true;
                    setGameOver(newGameOver);
                    setMessage("wow ... amazing");
                } else {
                    scrambleThings();
                }
            }
        }
    }

    function newGame() {
        things.forEach((thing) => (thing.clicked = false));
        setGameOver(false);
        setScore(0);
        setMessage("go for it!");
        scrambleThings();
    }

    useEffect(() => {
        newGame();
    }, []);

    return (
        <div id="Game">
            <div>don't click the same one twice</div>
            <div>score: {score}</div>
            <div>high score: {highScore}</div>
            <div>{message}</div>
            <div id="cards">
                {things.map((thing) => (
                    <Card
                        key={thing.id}
                        id={thing.id}
                        name={thing.name}
                        svg={thing.svg}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <button onClick={newGame}>new game</button>
        </div>
    );
}

export default Game;
