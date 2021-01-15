import React, { useEffect, useState } from "react";
import Board from "./Board";

function Game() {
    const [boardSize, setBoardSize] = useState(4);

    const [board, setBoard] = useState([]);

    useEffect(() => {
        initBoard();
    }, []);

    const initBoard = () => {
        let newBoard = [];
        for (let i = 0; i < boardSize * boardSize; i++) {
            newBoard.push(square(i));
        }
        newBoard = addShips(newBoard);
        setBoard(newBoard);
    };

    const square = (i) => {
        let id = i;
        let shipPresent = false;
        let bombed = false;
        // const yo = "yo";
        return { id, shipPresent, bombed };
    };

    const addShips = (newBoard) => {
        const numSquares = boardSize;
        let i = 0;
        while (i < numSquares) {
            let index = Math.floor(Math.random() * newBoard.length);
            if (!newBoard[index].shipPresent) {
                newBoard[index].shipPresent = true;
                i++;
            }
        }
        return newBoard;
    };

    const handleClick = (event) => {
        event.preventDefault();
        const id = event.target.id;
        let newBoard = [...board];
        let index = newBoard.findIndex((ele) => ele.id == id);
        newBoard[index].bombed = true;
        setBoard(newBoard);
    };

    // const [score, setScore] = useState(0);
    // const [highScore, setHighScore] = useState(0);
    // const [gameOver, setGameOver] = useState(false);
    // const [message, setMessage] = useState("go for it!");

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // function scrambleThings() {
    //     let newThings = [...things];
    //     shuffleArray(newThings);
    //     setThings(newThings);
    // }

    // function handleClick(id) {
    //     let newGameOver = gameOver;
    //     let index = things.findIndex((ele) => ele.id === id);
    //     if (!newGameOver) {
    //         if (things[index].clicked) {
    //             newGameOver = true;
    //             setGameOver(newGameOver);
    //             setMessage("too bad, mate");
    //         } else {
    //             things[index].clicked = true;
    //             let newScore = score + 1;
    //             setScore(newScore);
    //             if (newScore > highScore) {
    //                 setHighScore(newScore);
    //             }
    //             if (newScore === things.length) {
    //                 newGameOver = true;
    //                 setGameOver(newGameOver);
    //                 setMessage("wow ... amazing");
    //             } else {
    //                 scrambleThings();
    //             }
    //         }
    //     }
    // }

    // function newGame() {
    //     things.forEach((thing) => (thing.clicked = false));
    //     setGameOver(false);
    //     setScore(0);
    //     setMessage("go for it!");
    //     scrambleThings();
    // }

    // useEffect(() => {
    //     newGame();
    // }, []);

    return (
        <div id="Game">
            <div>whose turn: {}</div>
            <div>who won: {}</div>
            <div
                id="board"
                style={{
                    gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`,
                }}
            >
                {board.map((square) => (
                    <div
                        className="square"
                        key={square.id}
                        id={square.id}
                        // name={thing.name}
                        // svg={thing.svg}
                        onClick={handleClick}
                        style={{
                            background:
                                square.bombed && square.shipPresent
                                    ? "red"
                                    : square.bombed
                                    ? "grey"
                                    : "white",
                        }}
                    >
                        {/* {square.bombed === false ? "" : "X"} */}
                    </div>
                ))}
            </div>
            <Board />
            {/* <button onClick={newGame}>new game</button> */}
        </div>
    );
}

export default Game;
