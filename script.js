let numbers = document.getElementsByClassName("num");
let displayScreen = document.getElementById("screen");
let operators = document.getElementsByClassName("btn-operator");
let equals = document.getElementById("btn-equals");
let resetBtn = document.getElementById("reset");
let firstNumber = "";
let secondNumber = "";
let result = "";


function add(a, b) {
    result = Number(a + b).toFixed(2);
    displayScreen.textContent = result;
}

function minus(a, b) {
    result = Number(a - b).toFixed(2);
    displayScreen.textContent = result;
}

function multiply(a, b) {
    result = Number(a * b).toFixed(2);
    displayScreen.textContent = result;
}

function divide(a, b) {
    result = Number(a / b).toFixed(2);
    displayScreen.textContent = result;
}

function operate(operator, a, b) {
    for (const button of operators) {
        button.addEventListener("click", () => {
            firstNumber = Number(firstNumber) + Number(displayScreen.textContent);
            displayScreen.textContent = "";
            if (button.textContent === "+") {
                operator = add;
            } else if (button.textContent === "-") {
                operator = minus;
            } else if (button.textContent === "x") {
                operator = multiply;
            } else if (button.textContent === "÷") {
                operator = divide;
            }
        })
    }
    equals.addEventListener("click", () => {
        secondNumber = Number(displayScreen.textContent);
        return operator(firstNumber, secondNumber)
    })
    
}


function screenNumber() {
    for (const number of numbers){
        number.addEventListener("click", () => {
            displayScreen.textContent = displayScreen.textContent + number.textContent;
        })
    }
}

function reset() {
    resetBtn.addEventListener("click", () => {
        displayScreen.textContent = "";
        firstNumber = "";
    })
}


screenNumber();
reset();
operate();