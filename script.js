// script.js
let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    display.value = expression;
}

function appendOperator(operator) {
    if (expression === '') return;
    expression += ` ${operator} `;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteLast() {
    expression = expression.trim().slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        expression = eval(expression).toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

// Scientific Functions
function square() {
    if (expression) {
        expression = Math.pow(parseFloat(expression), 2).toString();
        display.value = expression;
    }
}

function sqrt() {
    if (expression) {
        expression = Math.sqrt(parseFloat(expression)).toString();
        display.value = expression;
    }
}

function sin() {
    if (expression) {
        expression = Math.sin(parseFloat(expression) * (Math.PI / 180)).toString();
        display.value = expression;
    }
}

function cos() {
    if (expression) {
        expression = Math.cos(parseFloat(expression) * (Math.PI / 180)).toString();
        display.value = expression;
    }
}

function tan() {
    if (expression) {
        expression = Math.tan(parseFloat(expression) * (Math.PI / 180)).toString();
        display.value = expression;
    }
}

function pow() {
    if (expression) {
        expression += '**';  // Allow user to enter the power manually
        display.value = expression;
    }
}
