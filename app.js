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


    function startGame() {
        gameBoard.addEventListener('click', handleHumanMove);
    };

    classic.addEventListener('click', () => {
        if (mode === 'AI') {
            mode = 'normal';
            classic.classList.add('active');
            AI.classList.remove('active');
        }
    })

    AI.addEventListener('click', () => {
        if (mode === 'normal') {
            mode = 'AI';
            AI.classList.add('active');
            classic.classList.remove('active');
        }
    })


    function handleHumanMove(event) {
        const cell = event.target;
        if (gameOver) {
            return;
        } else if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            const clickedIndex = Array.from(gameBoard.children).indexOf(cell);
            boardArray[clickedIndex] = currentPlayer;
            checkForWinner();
            if (gameOver) {
                return;
            } else {
                if (mode === 'normal') {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    display.textContent = `${currentPlayer}'s turn`;
                } else if (mode === 'AI') {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    display.textContent = `${currentPlayer}'s turn`;
                    aiMove();
                }

            }
        }
    }


    function aiMove() {
        chosenSpot = bestMove();

        cells.forEach(cell => {
            if (cell.id == chosenSpot) {
                cell.textContent = currentPlayer;
            }
        })
        boardArray[chosenSpot] = currentPlayer;

        checkForWinner();
        if (gameOver) {
            return;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            display.textContent = `${currentPlayer}'s turn`;
        }
    };

    //Minimax
    function bestMove() {
        return minimax(boardArray, aiPlayer).index;
    }

    function emptySpots(board) {
        let indices = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                indices.push(i);
            }
        }
        return indices;
    }

    function checkWinForMinimax(board, player) {
        let plays = board.reduce((a, e, i) => 
            (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        for (let [index, win] of winningCombos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = {index: index, player: player};
                break;
            }
        }
        return gameWon;
    }

    const aiPlayer = 'O';
    const huPlayer = 'X';

    function minimax(board, player) {
        let availableSpots = emptySpots(boardArray);

        if(checkWinForMinimax(board, huPlayer)) {
            return {score: -10};
        } else if (checkWinForMinimax(board, aiPlayer)) {
            return {score: 10};
        } else if (availableSpots.length === 0){
            return {score: 0};
        }

        let moves = [];

        for (let i = 0; i < availableSpots.length; i++) {
            let move = {};
            move.index = availableSpots[i];
            board[availableSpots[i]] = player;

            if (player === aiPlayer) {
                let result = minimax(board, huPlayer);
                move.score = result.score;
            } else {
                let result = minimax(board, aiPlayer);
                move.score = result.score;
            }

            board[availableSpots[i]] = '';

            moves.push(move);
        }

        let bestMove;

        if (player === aiPlayer) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
    }
})();