const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

let isCircle = false;
const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7]
]
const squareList = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessage = document.getElementById('winning-message');
const winningMessageText = document.querySelector('[data-winning-message-text]')
const restartButton = document.getElementById('restart-btn');

const isWinning = (currentClass) => {
    return winningCondition.some(combindation => combindation.every(index => squareList[index].classList.contains(currentClass)))
};

const isDraw = () => {
    return [...squareList].every(cell => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS))
}

const endGame = (draw) => {
    if (draw) {
        winningMessageText.innerHTML = 'Draw!!!!'
    } else {
        winningMessageText.innerHTML = `${isCircle ? 'O' : 'X'} won!`;
    }
    winningMessage.classList.add('show')
}

const switchTurn = () => {
    isCircle = !isCircle
    board.classList.remove(CIRCLE_CLASS)
    board.classList.remove(X_CLASS)
    board.classList.add(isCircle ? CIRCLE_CLASS : X_CLASS)
};

const handleClick = (cell) => {
    const currentClass = isCircle ? CIRCLE_CLASS : X_CLASS;
    cell.classList.add(currentClass);
    if (isWinning(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    }
    switchTurn();
}

const startGame = () => {
    isCircle = false;
    board.classList.add(isCircle ? CIRCLE_CLASS : X_CLASS)
    squareList.forEach(square => {
        square.addEventListener('click', () => handleClick(square), {
            once: true
        })
    });
}

startGame();

restartButton.addEventListener('click', () => startGame())
