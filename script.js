let firstNum = 0;
let secondNum = 0;
let operator = "";
let firstNumSave = false;
let firstCalcRun = false;
let prevEqual = false;
let displayValue = 0;
const numDisplay = document.querySelector(".display");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "Error";
    }
    a / b;
};
const modulo = (a, b) => a % b;

function operate(a, b, operator) {
    firstCalcRun = true;
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
        case "%":
            return modulo(a, b);
            break;
    }
}

function display(number) {
    // clear display on second number entry
    if (firstNumSave) {
        numDisplay.textContent = "";
        firstNumSave = false;
    }
    // prevent multiple decimal points
    if (number === "." && numDisplay.textContent.includes(".")) {
        return;
    }
    numDisplay.textContent += number;
}

function equal() {
    if (!prevEqual) {
        secondNum = numDisplay.textContent;
    }
    //secondNum = numDisplay.textContent;
    firstNum = operate(firstNum, secondNum, operator);
    numDisplay.textContent = firstNum;
    firstNumSave = true;
    firstCalcRun = false;
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
            if (firstCalcRun) {
                equal();
                operator = button.textContent;
            }
            else if (!firstCalcRun) {
                operator = button.textContent;
                firstCalcRun = true;
                firstNum = numDisplay.textContent;
                firstNumSave = true;
            }
            prevEqual = false;
        });
    }
    else if (button.classList.contains("clear")) {
        button.addEventListener("click", () => {
            numDisplay.textContent = "";
            firstNum = 0;
            secondNum = 0;
            operator = "";
            firstNumEntry = false;
            firstCalcRun = false;
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
            prevEqual = true;
        });
    }
});