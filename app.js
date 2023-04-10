const playerCreator = (name, symbol) => {
    return {
        name,
        symbol
    };
};

const gameBoard = (() => {
    const squares = document.querySelectorAll('.square');

    let gameArray = Array(9).fill("");

    const renderBoard = (gameArray) => {
        squares.forEach((square, index) => {
            square.textContent = gameArray[index];
        });
    };
    
    return {
        getGameArray() {
            return gameArray;
        },
        
        setGameArray(newArray) {
            gameArray = newArray;
            renderBoard(gameArray);
        },

        resetGameArray() {
            gameArray = [];
            renderBoard(gameArray);
        },

        renderBoard
    };
})();

const gameController = (() => {
    const player1 = playerCreator("Player 1", "X");
    const player2 = playerCreator("Player 2", "O");
    let currentPlayer = player1;

    const startGame = () => {
        const startButton = document.getElementById('start-button');
        const startScreen = document.getElementById('start-screen');
        startButton.addEventListener('click', () => {
            document.getElementById('game-board-container').style.display = 'block';
            startScreen.style.display = 'none';
        });
    }
    
    const playersTurn = () => {
        //
    }
    
    const isGameOver = () => {
        //
    }
    const resetGame = () => {
        //
    }
    return {
        startGame: startGame,
        playersTurn: playersTurn,
        isGameOver: isGameOver,
        resetGame: resetGame,
    };
})();

gameController.startGame();
