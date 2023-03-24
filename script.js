let firstNum = 0;
let secondNum = 0;
let operator = "";
let numEntry = false;
let displayValue = 0;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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

function display(number) {
    const display = document.querySelector(".display");
    display.textContent += number;
}

function operatorClick(operator) {
    const display = document.querySelector(".display");
    firstNum = display.textContent;
    numEntry = true;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    if (button.classList.contains("digit")) {
        button.addEventListener("click", () => {
            displayValue = button.textContent;
            display(displayValue);
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