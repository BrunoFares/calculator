const firstNumber = 0;
const operator = '';
const secondNumber = 0;

const display = document.querySelector('div#screen');
const number = document.querySelectorAll('div.number');
const plusSign = document.querySelector('div#plus-sign');
const minusSign = document.querySelector('div#minus-sign');
const timesSign = document.querySelector('div#times-sign');
const divisionSign = document.querySelector('div#division-sign');
const equals = document.querySelector('div#equals');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
        screenDisplays(number[i].textContent)
    });
}

plusSign.addEventListener('click', () => {
    if (displayValue[displayValue.length-1] !== '+'
     && displayValue[displayValue.length-1] !== '-'
     && displayValue[displayValue.length-1] !== '*'     
     && displayValue[displayValue.length-1] !== '/') screenDisplays('+');
})

minusSign.addEventListener('click', () => {
    if (displayValue[displayValue.length-1] !== '+'
     && displayValue[displayValue.length-1] !== '-'
     && displayValue[displayValue.length-1] !== '*'     
     && displayValue[displayValue.length-1] !== '/') screenDisplays('-');
})

timesSign.addEventListener('click', () => {
    if (displayValue[displayValue.length-1] !== '+'
     && displayValue[displayValue.length-1] !== '-'
     && displayValue[displayValue.length-1] !== '*'     
     && displayValue[displayValue.length-1] !== '/') screenDisplays('*');
})

divisionSign.addEventListener('click', () => {
    if (displayValue[displayValue.length-1] !== '+'
     && displayValue[displayValue.length-1] !== '-'
     && displayValue[displayValue.length-1] !== '*'     
     && displayValue[displayValue.length-1] !== '/') screenDisplays('/');
})

equals.addEventListener('click', operate);

function add(...array) {
    return newArray.reduce((sum, item) => sum + item, 0);
}

function subtract(...array) {
    return array.reduce((diff, item) => diff - item);
}

function multiply(...array) {
    return array.reduce((prod, item) => prod * item, 1);
}

function divide(...array) {
    return array.reduce((total, item) => total / item);
}

function operate() {
    if (+displayValue[displayValue.length - 1] === 'number') {
        console.log(false);
    }   
}

let displayValue;
function screenDisplays(item) {
    displayValue = display.textContent += item;
}