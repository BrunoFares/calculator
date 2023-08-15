let displayValue = 0;

const display = document.querySelector('div#screen');
const number = document.querySelectorAll('div.number');
const plusSign = document.querySelector('div#plus-sign');
const minusSign = document.querySelector('div#minus-sign');
const timesSign = document.querySelector('div#times-sign');
const divisionSign = document.querySelector('div#division-sign');
const equals = document.querySelector('div#equals');
const reset = document.querySelector('div#reset');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
        if (displayValue == 0) screenDisplays(number[i].textContent, 'closed')
        else if (displayValue != 0) screenDisplays(number[i].textContent, 'open')
    });
}

reset.addEventListener('click', () => screenDisplays(0, 'closed'));

plusSign.addEventListener('click', () => {
    if (displayValue === undefined) screenDisplays('+', 'open')
    else if (displayValue[displayValue.length-1] !== '+'
          && displayValue[displayValue.length-1] !== '-'
          && displayValue[displayValue.length-1] !== '*'     
          && displayValue[displayValue.length-1] !== '/') { 
            screenDisplays('+', 'open');
        }
    
})

minusSign.addEventListener('click', () => {
    if (displayValue === undefined) screenDisplays('-', 'open')
    else if (displayValue[displayValue.length-1] !== '+'
          && displayValue[displayValue.length-1] !== '-'
          && displayValue[displayValue.length-1] !== '*'     
          && displayValue[displayValue.length-1] !== '/') { 
            screenDisplays('-', 'open');
        }
})

timesSign.addEventListener('click', () => {
    if (displayValue === undefined) screenDisplays('*', 'open')
    else if (displayValue[displayValue.length-1] !== '+'
          && displayValue[displayValue.length-1] !== '-'
          && displayValue[displayValue.length-1] !== '*'     
          && displayValue[displayValue.length-1] !== '/') { 
            screenDisplays('*', 'open');
        }
})

divisionSign.addEventListener('click', () => {
    if (displayValue === undefined) screenDisplays('/', 'open')
    else if (displayValue[displayValue.length-1] !== '+'
          && displayValue[displayValue.length-1] !== '-'
          && displayValue[displayValue.length-1] !== '*'     
          && displayValue[displayValue.length-1] !== '/') { 
            screenDisplays('/', 'open');
        }
})

equals.addEventListener('click', operate);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate() {
    let opArray = displayValue.split('')

    let opNums = displayValue.split(/[-*+/]+/)
    let opOpers = opArray.filter(item => {
        return item === '+'
            || item === '-'
            || item === '*'
            || item === '/';
    })

    for (let i = 0; i < opNums.length; i++) {
        switch (opOpers[i]){
        case '+':
            opNums[i] = add(+opNums[i], +opNums[i+1])
            break;
        case '-':
            opNums[i] = subtract(+opNums[i], +opNums[i+1])
            break;
        case '*':
            opNums[i] = multiply(+opNums[i], +opNums[i+1])
            break;
        case '/':
            opNums[i] = divide(+opNums[i], +opNums[i+1])
            break;
        }
    }
    screenDisplays(opNums[0], 'closed');
}


function screenDisplays(item, setting) {
    if (setting === 'closed') {
        displayValue = display.textContent = item;
    } else if (setting === 'open') {
        displayValue = display.textContent += item;
    }
}