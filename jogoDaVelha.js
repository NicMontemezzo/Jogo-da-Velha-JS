let currentPlayer = 'X';
let scoreX = 0;
let scoreO = 0;

const cells = document.querySelectorAll('[data-cell]');
const cellsArray = Array.from(cells);
const messageElement = document.getElementById('message');
const scoreXElement = document.getElementById('scoreX');
const scoreOElement = document.getElementById('scoreO');
const resetButton = document.getElementById('resetButton');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick, { once: true });
});

resetButton.addEventListener('click', resetBoard);

// Atualize o jogador atual e altere a classe do tabuleiro para refletir a cor do hover
function handleCellClick(e) {
    const cell = e.target;
    cell.textContent = currentPlayer;

    // Define a cor com base no jogador atual
    if (currentPlayer === 'X') {
        cell.style.backgroundColor = '#ff9999'; // Cor para X
    } else {
        cell.style.backgroundColor = '#9999ff'; // Cor para O
    }

    if (checkWin(currentPlayer)) {
        updateScore(currentPlayer);
        messageElement.textContent = `Jogador ${currentPlayer} venceu!`;
        disableBoard();
    } else if (isDraw()) {
        messageElement.textContent = 'Empate!';
    } else {
        // Alterna o jogador e atualiza a classe do tabuleiro
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.querySelector('.board').className = `board player-${currentPlayer}`;
        messageElement.textContent = `Vez de: ${currentPlayer}`;
    }
}

function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellsArray[index].textContent === player;
        });
    });
}

function isDraw() {
    return cellsArray.every(cell => cell.textContent !== '');
}

function updateScore(player) {
    if (player === 'X') {
        scoreX++;
        scoreXElement.textContent = scoreX;
    } else {
        scoreO++;
        scoreOElement.textContent = scoreO;
    }
}

function disableBoard() {
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}

// Atualize a classe do tabuleiro ao reiniciar
function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = ''; // Remove a cor ao reiniciar
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, { once: true });
    });
    currentPlayer = 'X';
    document.querySelector('.board').className = `board player-${currentPlayer}`;
    messageElement.textContent = `Vez de: ${currentPlayer}`;
}