let firstNum = 0;
let secondNum = 0;
let operator = "";
let firstNumEntry = false;
let displayValue = 0;
const numDisplay = document.querySelector(".display");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
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
    if (firstNumEntry) {
        numDisplay.textContent = "";
        firstNumEntry = false;
    }
    numDisplay.textContent += number;
}

function operatorClick(operator) {
    firstNum = numDisplay.textContent;
    firstNumEntry = true;
    console.log("firstNum = " + firstNum);
    console.log(operator);
}

function equal() {
    secondNum = numDisplay.textContent;
    console.log("secondNum = " + secondNum);
    numDisplay.textContent = operate(firstNum, secondNum, operator);
    console.log(numDisplay.textContent);
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
    else if (button.classList.contains("clear")) {
        button.addEventListener("click", () => {
            numDisplay.textContent = "";
        });
    }
    else if (button.classList.contains("delete")) {
        button.addEventListener("click", () => {
            numDisplay.textContent = numDisplay.textContent.slice(0, -1);
        });
    }
    else if (button.classList.contains("equal")) {
        button.addEventListener("click", () => {
            equal();
        });
    }
});