
const displayScrn1 = document.querySelector('.display-1');
const displayResult = document.querySelector('.display-result');
const allNumbers = document.querySelectorAll('.number');
const clearScreen = document.querySelector('.all-clear');
const clearLastNumber = document.querySelector('.last-clear');
const allOperators = document.querySelectorAll('.operator');
const dotButton = document.querySelector('.dot');
const equalButton = document.querySelector('.equal');

let screen = '';
let result = null;
let operator = '';
let dot = false;

//number button click
allNumbers.forEach( number => {
    number.addEventListener('click', (e) => {
        console.log(number)
        if (e.target.innerText === '.' && !dot) {
            dot = true;
        } else if (e.target.innerText === '.' && dot) {
            return;
        }
        //When the user presses the button, the content is saved in screeTwo variable.
        screen += e.target.innerHTML;
        //After the screenTwo content is connected to the const (displayScrn2) that is querySelecting the actual node (class: display-2)
        displayScrn1.innerHTML = screen;
    } )
})


//delete button click

//delete everything
clearScreen.addEventListener('click', (e) => {
    if ( e.target.innerText === 'C') {
        screen = '';
        displayScrn1.innerText = 0;
        result = '';
        displayResult.innerText = '0';
    }
})

clearLastNumber.addEventListener('click', (e) => {
    //clicking in 'CE' removes the last number
    displayScrn1.innerText = displayScrn1.innerText.slice(0, -1);
    console.log({clearLastNumber}) 
    return;
    
})

//operator numbers click
allOperators.forEach( operation => {
    operation.addEventListener('click', (e) => {
      if (!screen)
          result;
      dot = false;
      const operationName = e.target.innerText;
      if ( screen && operator ) {
          mathCalculator();
      } else {
          result = parseFloat(screen);
      }
      updateResultScreen(operationName);
      operator = operationName;
    })
});

function updateResultScreen (name = '') {
    screen += '' + name + '';
    displayScrn1.innerText = screen;
    displayResult.innerText = result;
}

function mathCalculator() { 
     /**
      * Under, parseFloat need to be used to convert the string into number and make the operation.
      * This is needed because the clicked number is being saved in the variable 'screen' that contains strings.
     */
    if ( operator === '+') {
        result = parseFloat(result) + parseFloat(screen);
    } else if ( operator === '-' ) {
        result = parseFloat(result) - parseFloat(screen);
    } else if ( operator === 'x' ) {
        result = parseFloat(result) * parseFloat(screen);
    } else if ( operator === '/' ) {
        result = parseFloat(result) / parseFloat(screen);
    } else if ( operator === '%' ) {
        result = parseFloat(result) % parseFloat(screen);
    }
}



//equal button click

equalButton.addEventListener('click', (e) => {
    if (!screen) return;
    dot = false;
    mathCalculator();
    updateResultScreen();
    displayScrn1.innerText = '';
    displayResult.innerText = result;
    screen = '';
    
})