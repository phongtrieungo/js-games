export const SNAKE_SPEED = 1;
const snakeBody = [
	{ x: 11, y: 11 },
	{ x: 11, y: 12 },
	{ x: 11, y: 13 },
];

export const update = () => {
	for (let index = snakeBody.length - 2; index >= 0; index--) {
		snakeBody[index + 1] = { ...snakeBody[index] };
    }
    
    // snakeBody[0].x += 1;
    // snakeBody[0].y += 0;
};

export const draw = (gameBoard) => {
	snakeBody.forEach((segment) => {
		const snakeElement = document.createElement("div");
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add("snake");
		// snakeElement.innerText = `${segment.x} - ${segment.y}`;
		gameBoard.appendChild(snakeElement);
	});
};
