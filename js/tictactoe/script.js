// If you need ONE of something (gameBoard), use a module.
// If you need multiples of something(players), use a factory.

const container = document.getElementById('container');
const inputs = document.querySelectorAll('.input');
const board = document.getElementById('board');
const newGame = document.getElementById('newGame');
const message = document.getElementById('message');

let Xname = 'mystery person X';
let Oname = 'mystery person O';

let inputStuff = (function () {
    'use strict';

    inputs.forEach(input => {
        input.addEventListener('input', updateName);
    })

    function updateName(e) {
        e.target.classList.contains('inputX') ? Xname = e.target.textContent : Oname = e.target.textContent;
    }

    newGame.addEventListener('click', startNewGame);

    function startNewGame(e) {
        gameBoard.init();
        gameBoard.render();
    }

    return {

    }
})()

let gameBoard = (function () {
    'use strict';

    let gameAlive;
    let values;
    let whoseTurn;

    let init = function () {
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
        gameAlive = true;
        values = new Array(9).fill(null);
        whoseTurn = 'X';
    }

    let render = function () {
        values.forEach((value, index) => {
            let square = document.createElement('button');
            square.classList.add('square');
            square.setAttribute('data-index', index);
            square.addEventListener('click', handleClick);
            square.textContent = value;
            board.appendChild(square);
        })
    }

    let handleClick = function (e) {
        let index = e.target.dataset.index;
        let currentValue = values[index];
        let newValue;
        if (gameAlive && currentValue == null) {
            newValue = whoseTurn;
            values[index] = newValue;
            e.target.textContent = newValue;
            checkWinner();
        }
    }

    let checkWinner = function () {
        let winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        let checkThree = function ([a, b, c]) {
            if (values[a] && values[a] == values[b] && values[a] == values[c]) {
                gameAlive = false;
                arguments[0].forEach(index =>
                    document.querySelectorAll(`[data-index=\'${index}\']`)[0]
                        .style.background = 'yellow');
            }
        }
        winLines.forEach(winLine => checkThree(winLine));
        if (gameAlive && values.indexOf(null) == -1) {
            message.textContent = `draw`;
        } else if (gameAlive) {
            whoseTurn = whoseTurn == 'X' ? 'O' : 'X';
        } else {
            // message.textContent = `winner: ${whoseTurn}`;
            message.textContent = `Congratulations, ${whoseTurn == 'X' ? Xname : Oname}. You win!`;
        }
    }

    return {
        init,
        render
    }
})();

gameBoard.init();
gameBoard.render();

