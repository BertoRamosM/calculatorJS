const displayCalc = document.querySelector(".display");
const displayResultElement = document.querySelector(".display-total");
const ac = document.querySelector(".ac");
const posneg = document.querySelector(".posneg");
const perc = document.querySelector(".perc");
const slash = document.querySelector(".slash");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multi = document.querySelector(".multi");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const add = document.querySelector(".add");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");
const equal = document.querySelector(".equal");
const buttons = document.querySelectorAll(".button");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operandSymbols = ["*", "/", "-", "+"];

// Numero max 16 characters on display
let calculation = [];

function showDisplay() {
  if (calculation.length >= 16) {
    calculation.splice(16);
  }
  const stringResult = calculation.join("");
  displayCalc.textContent = stringResult;

  if (calculation[0] === 0 && !calculation.includes(".")) {
    calculation.shift();
  } else if (calculation.length === 0 || operandSymbols.includes(calculation[0])) {
    calculation.shift();
  } else if (
    operandSymbols.includes(calculation[calculation.length - 2]) &&
    operandSymbols.includes(calculation[calculation.length - 1])
  ) {
    calculation.pop();
  }
  displayCalc.textContent = calculation.join("");
}

showDisplay();

function checkOperand() {
  if (calculation[0] === 0 && !calculation.includes(".")) {
    calculation.shift();
  } else if (calculation.length === 0 || operandSymbols.includes(calculation[0])) {
    calculation.shift();
  } else if (
    operandSymbols.includes(calculation[calculation.length - 2]) &&
    operandSymbols.includes(calculation[calculation.length - 1])
  ) {
    calculation.pop();
  }
}

// Top display: shows the result of calculation
let result = [0];

function displayResult() {
  if (result.length >= 16) {
    result.splice(16);
  }

  const stringTotal = result.join("");
  displayResultElement.textContent = stringTotal;
}

displayResult();

function addNumber() {
  zero.addEventListener("click", function () {
    calculation.push(0);
    showDisplay();
  });

  nine.addEventListener("click", function () {
    calculation.push(9);
    showDisplay();
  });

  eight.addEventListener("click", function () {
    calculation.push(8);
    showDisplay();
  });

  seven.addEventListener("click", function () {
    calculation.push(7);
    showDisplay();
  });

  six.addEventListener("click", function () {
    calculation.push(6);
    showDisplay();
  });

  five.addEventListener("click", function () {
    calculation.push(5);
    showDisplay();
  });

  four.addEventListener("click", function () {
    calculation.push(4);
    showDisplay();
  });

  three.addEventListener("click", function () {
    calculation.push(3);
    showDisplay();
  });

  two.addEventListener("click", function () {
    calculation.push(2);
    showDisplay();
  });

  one.addEventListener("click", function () {
    calculation.push(1);
    showDisplay();
  });

  // Toggle minus or plus number
  let minusFlag = false;
  posneg.addEventListener("click", function () {
    minusFlag = !minusFlag;
    if (minusFlag === true) {
      calculation.unshift("-");
    } else if (minusFlag === false) {
      calculation.shift("-");
    }
    showDisplay();
  });

  ac.addEventListener("click", function () {
    calculation = [0];
    showDisplay();
  });
}

addNumber();

// Add operands
function addOperand() {
  perc.addEventListener("click", function () {
    calculation.push("%");
    showDisplay();
  });

  slash.addEventListener("click", function () {
    calculation.push("/");
    showDisplay();
  });

  multi.addEventListener("click", function () {
    calculation.push("*");
    showDisplay();
  });

  minus.addEventListener("click", function () {
    calculation.push("-");
    showDisplay();
  });

  add.addEventListener("click", function () {
    calculation.push("+");
    showDisplay();
  });


    
  point.addEventListener("click", function () {
    calculation.push(".");
    showDisplay();
  });
}

addOperand();

// Calculation
function calculateArray() {
  equal.addEventListener("click", function () {
    let decimalCount = 0;
    let currentOperator = null;
    let currentNumber = 0;
    let previousOperator = null;
    let percentageMode = false;

    for (let i = 0; i < calculation.length; i++) {
      const currentItem = calculation[i];

      if (typeof currentItem === "number") {
        if (decimalCount > 0) {
          currentNumber += currentItem / Math.pow(10, decimalCount);
          decimalCount++;
        } else {
          currentNumber = currentNumber * 10 + currentItem;
        }
      } else if (currentItem === ".") {
        decimalCount = 1;
      } else if (operandSymbols.includes(currentItem)) {
        if (percentageMode) {
          currentNumber = result[0] * (currentNumber / 100);
          percentageMode = false;
        }

        if (currentOperator === null) {
          result[0] = currentNumber;
        } else {
          result[0] = evaluateOperation(result[0], currentNumber, currentOperator);
        }

        currentOperator = currentItem;
        currentNumber = 0;
        decimalCount = 0;
        previousOperator = currentOperator;
      } else if (currentItem === "%") {
        if (
          operandSymbols.includes(previousOperator) &&
          !operandSymbols.includes(calculation[i + 1])
        ) {
          percentageMode = true;
        }
      }
    }

    if (currentOperator !== null) {
      if (percentageMode) {
        currentNumber = result[0] * (currentNumber / 100);
        percentageMode = false;
      }

      result[0] = evaluateOperation(result[0], currentNumber, currentOperator);
    }

    displayResult();
  });
}

function evaluateOperation(leftOperand, rightOperand, operator) {
  switch (operator) {
    case "+":
      return leftOperand + rightOperand;
    case "-":
      return leftOperand - rightOperand;
    case "*":
      return leftOperand * rightOperand;
    case "/":
      return leftOperand / rightOperand;
    default:
      throw new Error("Invalid operator: " + operator);
  }
}

calculateArray();