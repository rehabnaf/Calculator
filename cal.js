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

const numButtons = document.querySelectorAll(".number-btn");

numButtons.forEach((button) => button.addEventListener("click", function () {
    if (operatorClicked === true) {
        if (displayContentClear === true) { // clearing the display content when a second number is entered so we can start with an empty display for the second number
            display.textContent = "";
            displayContentClear = false;
        }
        display.textContent += button.textContent;
        secondNum = Number(display.textContent);
    }
    else {
        display.textContent += button.textContent;
    }

}))

const operatorButtons = document.querySelectorAll(".operator-btn");
let operatorClicked = false;
let displayContentClear = true;
let operatorName = "";

operatorButtons.forEach((button) => button.addEventListener("click", function () {
    operatorName = button.textContent;
    operatorClicked = true;
    displayContentClear = true;
    decimalClickedOnce = false;
    firstNum = Number(display.textContent);

}))

const calculateBtn = document.querySelector("#calculate-btn");
calculateBtn.addEventListener("click", function () {
    display.textContent = operate(operatorName, firstNum, secondNum);
})

const percentageBtn = document.querySelector("#percentage-btn");
percentageBtn.addEventListener("click", function () {
    display.textContent = Number(display.textContent) / 100;
})

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", function () {
    display.textContent = "";
    operatorClicked = false;
    displayContentClear = false;
    decimalClickedOnce = false;
})

const negateBtn = document.querySelector("#negate-btn");
negateBtn.addEventListener("click", function () {
    if (Number(display.textContent) > 0) {
        display.textContent = Math.abs(display.textContent) * -1;
        console.log(display.textContent);
    }
    else {
        display.textContent = Math.abs(display.textContent);
        console.log(display.textContent);
    }

})

const decimalBtn = document.querySelector("#decimal-btn");

let decimalClickedOnce = false; // This ensures that the user can only use the decimal button once when entering a number so only valid numbers can be entered

decimalBtn.addEventListener("click", function () {
    if (decimalClickedOnce === false) {
        display.textContent += ".";
        decimalClickedOnce = true;
    }
})






