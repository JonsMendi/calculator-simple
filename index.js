
const displayScrn1 = document.querySelector('.display-1');
const allNumbers = document.querySelectorAll('.number');
const clearScreen = document.querySelector('.all-clear');
const clearLastNumber = document.querySelector('.last-clear');
const allOperators = document.querySelectorAll('.operator');
const dotButton = document.querySelector('.dot');
const equalButton = document.querySelector('.equal');

let firstNumber = ''; // Old Number
let secondNumber = ''; // Current Number
let resultNumberScreen; // Result Screen
let operatorSelected;



//number button click
for (let i = 0, l = allNumbers.length; i < l; i++) {
    allNumbers[i].onclick = setNumber
}

function setNumber ()  {
        if (resultNumberScreen) {
            firstNumber = this.getAttribute('data-number');
            resultNumberScreen = ''
        } else if (!resultNumberScreen) {
            firstNumber += this.getAttribute('data-number');
        }
        //After the screenTwo content is connected to the const (displayScrn2) that is querySelecting the actual node (class: display-2)
        displayScrn1.innerHTML = firstNumber;
        console.log('Result screen', displayScrn1);
}

/**
 * Operation button click functionality
 */

for (let i = 0, l = allOperators.length; i < l; i++) {
    allOperators[i].onclick = moveNumber;
}

function moveNumber() {
    secondNumber = firstNumber;
    firstNumber = '';
    operatorSelected = this.getAttribute('data-operator');
    console.log('operator clicked?', operatorSelected);
    // set it in the equal button
    equalButton.setAttribute('data-result', '');
    console.log('equal button clicked?', equalButton); 
}

/**
 * Equal Button click functionality
 */

equalButton.onclick = displayNumber;

function displayNumber () {

    //pass strings saved in variables into numbers
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch(operatorSelected) {
        case 'plus':
            resultNumberScreen = secondNumber + firstNumber;
            break;
        case 'subtract':
            resultNumberScreen = secondNumber - firstNumber;
            break;
        case 'multiply':
            resultNumberScreen = secondNumber * firstNumber;
            break;
        case 'divide':
            resultNumberScreen = secondNumber / firstNumber;
            break;
        case 'percentage':
            resultNumberScreen = secondNumber % firstNumber;

        default:
            resultNumberScreen = firstNumber;
    }

    displayScrn1.innerHTML = resultNumberScreen;
    equalButton.setAttribute('data-result', resultNumberScreen);

    secondNumber = 0;
    firstNumber = resultNumberScreen;
}

//delete button click

/**
 * Delete everything.
 * TODO: somehow, after deleting everything, it gives an error when typing new operation
 */
 clearScreen.addEventListener('click', (e) => {
    displayScrn1.innerText = '0';
    equalButton.setAttribute('data-result', resultNumberScreen)
    return;
    
})
