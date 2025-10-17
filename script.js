let display = document.getElementById('display');
let nums = Array.from(document.getElementsByClassName('num'));
let ops = Array.from(document.getElementsByClassName('op'));
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');

let firstOperand = '';
let secondOperand = '';
let currentOp = null;

nums.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.value);
    });
});

ops.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.value);
    });
});

equals.addEventListener('click', compute);
clear.addEventListener('click', clearDisplay);

function appendNumber(number) {
    if (display.value === '0') display.value = number;
    else display.value += number;
}

function chooseOperation(op) {
    if (display.value === '') return;
    if (firstOperand !== '') compute();
    firstOperand = display.value;
    currentOp = op;
    display.value = '';
}

function compute() {
    if (display.value === '' || firstOperand === '') return;
    secondOperand = display.value;
    display.value = operate(currentOp, firstOperand, secondOperand);
    firstOperand = display.value;
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOp = null;
}

function operate(op, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'ERROR';
            else return a / b;
        default:
            return 'ERROR';
    }
}