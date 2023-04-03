const playerCreator = (name, symbol) => {
    return {
        name: name,
        symbol: symbol
    }
}

const gameBoard = (() =>  {
    const squares = document.querySelectorAll('.square');

    let gameArray = [
        "X","","O",
        "","X","",
        "O","","X"
    ];

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
        //listeners go here to inistialize the game
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

