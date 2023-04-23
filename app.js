const playerCreator = (name, symbol) => {
    return {
        name,
        symbol
    };
};

const gameBoard = (() => {
    const squares = document.querySelectorAll('.square');
    let gameArray = Array(9).fill(null);
    let currentPlayer

    const renderBoard = (gameArray) => {
        squares.forEach((square, index) => {
            square.textContent = gameArray[index];
        });
    };

    const setCurrentPlayer = (player) => {
        currentPlayer = player;
    }

    const isGameOver = () => {
        const winningCombos = [
            //rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //diagonals
            [0, 4, 8],
            [2, 4, 6],
        ];

        //Checking for a winning combination
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (gameArray[a] && gameArray[a] === gameArray[b] && gameArray[a] === gameArray[c]) {
                return true;
                //winning message !!
            }
        }
        
        //Checking for a tie
        for (let i = 0; i < gameArray.length; i++) {
            if (gameArray[i] === null) {
                //any squares=null means no tie. games continues
                return false;
            }
        }

        //if no winner and no empty squares, the game is a tie
        return true;
        //Tie message

    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    
    const addSquareListeners = () => {
        squares.forEach((square, index) => {
            square.addEventListener('click', () => {
                
                if (gameArray[index] !== null || isGameOver()) {
                    return;
                }

                gameBoard.setGameArray(
                    gameArray.map((value, i) =>
                        i === index ? currentPlayer.symbol : value
                    )
                );

                if (isGameOver()) {
                    return;
                }
                switchPlayer();
            });
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
            gameArray = Array(9).fill(null);
            renderBoard(gameArray);
        },

        renderBoard,

        setCurrentPlayer,

        addSquareListeners,
    };
})();

const gameController = (() => {
    const player1 = playerCreator('','');
    const player2 = playerCreator('','');

    const startGame = () => {
        const startButton = document.getElementById('start-button');
        const startScreen = document.getElementById('start-screen');
        const gameBoardContainer = document.getElementById('game-board-container');
        
        startButton.addEventListener('click', () => {
            const { player1Name, player2Name, player1Symbol, player2Symbol } = getPlayerInfo();
            
            player1.name = player1Name;
            player1.symbol = player1Symbol;
            player2.name = player2Name;
            player2.symbol = player2Symbol;
            
            // update player names/and symbols in .gameScreen
            const player1GameName = document.querySelector('#player1 .name');
            const player2GameName = document.querySelector('#player2 .name');
            const player1GameSymbol = document.querySelector('#player1 .symbol');
            const player2GameSymbol = document.querySelector('#player2 .symbol');
         
            player1GameName.textContent = player1Name;
            player2GameName.textContent = 'Computer';
            player1GameSymbol.textContent = player1Symbol;
            player2GameSymbol.textContent = player2Symbol;
            
            gameBoard.resetGameArray();
            gameBoard.setCurrentPlayer(player1);
            startScreen.style.display = 'none';
            gameBoardContainer.style.display = 'block';
            gameBoard.addSquareListeners();
        });
    };
    
    const getPlayerInfo = () => {
        const player1Name = document.getElementById('player1-name-input').value;
        const player2Name = 'Computer';
        const player1Symbol = document.querySelector('input[name="symbol"]:checked').value;
        const player2Symbol = player1Symbol === 'X' ? 'O' : 'X';

        return { player1Name, player2Name, player1Symbol, player2Symbol };
    };

    const playersTurn = () => {
        
    }
    
    const resetGame = () => {
        //
    }
    return {
        startGame: startGame,
        playersTurn: playersTurn,
        resetGame: resetGame,
    };
})();

gameController.startGame();
