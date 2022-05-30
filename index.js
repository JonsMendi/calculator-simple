
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


/**
 * Number button click functionality
 * 
 * TODO: set '.' limitation
 */

//make a loop through numbers and save it in setNumber function
for (let i = 0, l = allNumbers.length; i < l; i++) {
    allNumbers[i].onclick = setNumber
}


function setNumber ()  {
        if (resultNumberScreen) {
            // reset screen in case of result displayed
            firstNumber = this.getAttribute('data-number');
            resultNumberScreen = ''
        } else {
            // in other way, add a number
            firstNumber += this.getAttribute('data-number');
        }
        // Then, display the value in the screen
        displayScrn1.innerHTML = firstNumber;
        console.log('Result screen', displayScrn1);
}

/**
 * Operation button click functionality
 * 
 * TODO: try to append all equation at the same time
 */

// make a loop in the operators and save it in moveNumber
for (let i = 0, l = allOperators.length; i < l; i++) {
    allOperators[i].onclick = moveNumber;
}

function moveNumber() {
    //when operator clicked, pass the first number to second number, allowing to set a new number
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
    //translate strings variables into numbers
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    //define operations possibilities
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
        default:
            resultNumberScreen = firstNumber;
    }

    //display the result
    displayScrn1.innerHTML = resultNumberScreen;
    //set the result to the equal button
    equalButton.setAttribute('data-result', resultNumberScreen);

    secondNumber = 0;
    firstNumber = resultNumberScreen;
}

//delete button click

/**
 * 
 */

//set the query selector to clearAll
 clearScreen.onclick = clearAll;

 function clearAll () {
     //get all the variables nests empty
     firstNumber = '';
     secondNumber = '';
     //display 0 placeholder
     displayScrn1.innerHTML = '0';
     //reset equal button
     equalButton.setAttribute('data-result', resultNumberScreen);
 }
