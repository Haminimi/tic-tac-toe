const ticTacToe = (function() {
    const cells = document.querySelectorAll('.cells');
    const display = document.querySelector('#display-text');
    const gameBoard = document.querySelector('#gameboard');
    let currentPlayer = 'X';
    let boardArray = ['', '', '', '', '', '', '', '', ''];
    const scoreX = document.querySelector('#score-display-X');
    const scoreO = document.querySelector('#score-display-O');
    let XScore = 0;
    let OScore = 0; 
    let mode = 'AI';
    const classic = document.querySelector('#classic');
    const AI = document.querySelector('#AI');
    let gameOver;
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];
})();