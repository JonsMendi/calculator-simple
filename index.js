const displayScrn1 = document.querySelector('.display-1');
const displayScrn2 = document.querySelector('.display-2');
const displayResult = document.querySelector('.display-result');
const allNumbers = document.querySelectorAll('.number');
const clearScreen = document.querySelector('.all-clear');
const clearLastNumber = document.querySelector('.last-clear');
const allOperators = document.querySelectorAll('.operator');
const dotButton = document.querySelector('.dot');
const equalButton = document.querySelector('.equal');

let screenOne = '';
let screenTwo = '';
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
        screenTwo += e.target.innerHTML;
        //After the screenTwo content is connected to the const (displayScrn2) that is querySelecting the actual node (class: display-2)
        displayScrn2.innerHTML = screenTwo;
    } )
})


//delete button click

//delete everything
clearScreen.addEventListener('click', (e) => {
    if ( e.target.innerText === 'C') {
        screenOne = '';
        displayScrn1.innerText = 0;
        screenTwo = '';
        displayScrn2.innerText = 0;
        result = '';
        displayResult.innerText = '0';
    }
})

clearLastNumber.addEventListener('click', (e) => {
    //clicking in 'CE' removes the last number
    displayScrn2.innerText = displayScrn2.innerText.slice(0, -1);
    console.log({clearLastNumber}) 
    return;
    
})

//operator numbers click
allOperators.forEach( operator => {
    operator.addEventListener('click', (result) => {
        switch(operator) {
            case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            console.log('was subtracted')
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        case '=':
            result = eval(result.innerText);
            
            break;    
        }

        screenOne = result;
        displayScrn1.innerHTML = screenOne
        console.log({result});
    })
} )





//equal button click