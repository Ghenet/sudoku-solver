const puzzleBoard = document.querySelector('#puzzle-board');
const solveButton = document.querySelector('#solve-button');
const squares = 81;  //as there are 9 by 9 squares in the board
const submission = [];
//loop over to create the 81 squares in the puzzleBoard
for(let i=0; i<squares; i++) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', 1);
    inputElement.setAttribute('max', 9);
    puzzleBoard.appendChild(inputElement);
}

//join all the input values in an array

const joinValues = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if(input.value) {
            submission.push(input.value);
        }else {
            submission.push('.')
        }
    })
    console.log(submission)
}

solveButton.addEventListener('click', joinValues);