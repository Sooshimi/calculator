const firstNum = 0;
const secondNum = 0;
let operator = "";
let operatorEntry = false;
let displayValue = 0;

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

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

function displayEntry(number) {
    const displayEntry = document.querySelector(".display-entry");
    displayEntry.textContent += number;
}

function operatorClick(operator) {
    const displayEntry = document.querySelector(".display-entry");
    displayEntry.textContent += operator;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    if (button.classList.contains("digit")) {
        button.addEventListener("click", () => {
            displayValue = button.textContent;
            displayEntry(displayValue);
        });
    }
    else if (button.classList.contains("operator")) {
        button.addEventListener("click", () => {
            operator = button.textContent;
            operatorClick(operator);
        });
    }
    else if (button.classList.contains("equals")) {
        button.addEventListener("click", () => {

        });
    }
});