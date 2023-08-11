let currentInput = '';
let displayValue = '0';
let operator = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    currentInput = '';
    displayValue = '0';
    operator = '';
    updateDisplay();
}

function appendNumber(num) {
    if (displayValue === '0') {
        displayValue = num;
    } else {
        displayValue += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '') {
        calculate();
    }
    currentInput = displayValue;
    displayValue = '0';
    operator = op;
    updateDisplay();
}

function calculate() {
    const num1 = parseFloat(currentInput);
    const num2 = parseFloat(displayValue);
    switch (operator) {
        case '+':
            displayValue = (num1 + num2).toString();
            break;
        case '-':
            displayValue = (num1 - num2).toString();
            break;
        case '*':
            displayValue = (num1 * num2).toString();
            break;
        case '/':
            displayValue = (num1 / num2).toString();
            break;
    }
    operator = '';
    currentInput = '';
    updateDisplay();
}

updateDisplay();
