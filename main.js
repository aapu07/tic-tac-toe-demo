// initalize global variables we will need
let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];
let xWinCount = 0
let oWinCount = 0
let drawCount = 0

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// get elements we need from our HTML
let bodyElement = document.querySelector('body')
let mainElement = document.querySelector('main')

// create the elements we need
let resetButton = myDOMHelper('button', bodyElement, 'Reset', 'reset')
let turnDiv = myDOMHelper('div', bodyElement, "X's turn", 'turn')
let winnerDiv = myDOMHelper('div', bodyElement, '', 'winner' )

for(let counter = 1; counter <= 9; counter = counter + 1){
    myDOMHelper('div', mainElement, "", counter, 'grid-cell')
}

// get an array of all the elements with a class of grid-cell from the page
let cellElementArray = document.querySelectorAll('.grid-cell');

// loop through cellElementArray and add a "click" event listener to each element
for (let i = 0; i < cellElementArray.length; i = i + 1) {
    let currentCellElement = cellElementArray[i]
    currentCellElement.addEventListener('click', moveHandler);
}

// add click event listener to reset button
resetButton.addEventListener("click", resetBoard)