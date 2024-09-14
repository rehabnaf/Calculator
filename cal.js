function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Not a number";
    }
    return num1 / num2;
}

let firstNum = 0;
let secondNum = 0;
let operator = "";
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        case "%":
            return divide(num1, 100);
            break;
    }
}

const display = document.querySelector(".displayContainer")

const buttons = document.querySelectorAll(".number-btn");

buttons.forEach((button) => button.addEventListener("click", function () {
    display.textContent += button.textContent;
}))


