const firstNum = 0;
const secondNum = 0;
const operator = "";
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
    if (!operatorEntry) {
        displayEntry.textContent += number;
    }
}

const buttons = document.querySelectorAll("button.digit");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue = button.textContent;
        displayEntry(displayValue);
    });
});