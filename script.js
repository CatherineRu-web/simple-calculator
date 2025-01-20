const display = document.getElementById("display") 

let firstOperand = "";
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if(shouldResetDisplay) {
        display.value = "";
        shouldResetDisplay = false;
    }
    display.value += number;

}

function chooseOperation(operation) {
    if(currentOperation !== null) {
        computeResult();
    }
    firstOperand = display.value;
    currentOperation = operation;
    shouldResetDisplay = true;
}

function computeResult() {
    const secondOperand = display.value;
    const firstOperandParsed = parseFloat(firstOperand);
    const secondOperandParsed = parseFloat(secondOperand);
    
    let result;

    if(currentOperation === "+") {
        result = firstOperandParsed + secondOperandParsed;
    } else if(currentOperation === "*") {
        result = firstOperandParsed * secondOperandParsed;
    } else if(currentOperation === "-") {
        result = firstOperandParsed - secondOperandParsed;
    } else if(currentOperation === "/") {
        result = firstOperandParsed / secondOperandParsed;
    } else {
        result = "";
    }
    display.value = result;
    currentOperation = null;
    
}

function clearDisplay() {
    display.value = "";
    firstOperand = "";
    currentOperation = null;
    shouldResetDisplay = false;
}