const displayScrn1 = document.querySelector('.display-1');
const displayScrn2 = document.querySelector('.display-2');
const displayResult = document.querySelector('.display-result');
const allNumbers = document.querySelectorAll('.button');
const allOperators = document.querySelectorAll('.operator');
const dotButton = document.querySelector('.dot');
const equalButton = document.querySelector('.equal');

let screenOne = '';
let screenTwo = '';
let result = null;
let lastOperator = false;
let dot = false;

//number button click
allNumbers.forEach( number => {
    number.addEventListener('click', (e) => {
        console.log(number)
        if (e.target.innerText === '.' && !false) {
            dot = true;
        } else if (e.target.innerText === '.' && false) {
            return;
        }
        //When the user presses the button, the content is saved in screeTwo variable.
        screenTwo = e.target.innerHTML;
        //After the screenTwo content is connected to the const (displayScrn2) that is querySelecting the actual node (class: display-2)
        displayScrn2.innerHTML = screenTwo;
    } )
})

//operator numbers click

//delete button click

//equal button click