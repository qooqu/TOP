// import React from "react";
import React, { useEffect, useState } from "react";

function Board(props) {
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
        </div>
    );

    // function handleClick(event) {
    //     event.preventDefault();
    //     props.handleClick(props.id);
    // }

    // return (
    //     <div className="card" onClick={handleClick}>
    //         {/* {props.name} */}
    //         <svg
    //             width="100"
    //             height="100"
    //             version="1.1"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <ellipse
    //                 cx={props.svg.cx}
    //                 cy={props.svg.cy}
    //                 rx={props.svg.rx}
    //                 ry={props.svg.ry}
    //                 fill="cadetblue"
    //             />
    //         </svg>
    //     </div>
    // );
}

export default Board;
