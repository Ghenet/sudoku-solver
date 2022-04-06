const puzzleBoard = document.querySelector('#puzzle-board');
const solveButton = document.querySelector('#solve-button');
const squares = 81;  //as there are 9 by 9 squares in the board

//loop over to create the 81 squares in the puzzleBoard
for(let i=0; i<squares; i++) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', 0);
    inputElement.setAttribute('max', 9);
    puzzleBoard.appendChild(inputElement);
}