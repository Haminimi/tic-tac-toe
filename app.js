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
})();