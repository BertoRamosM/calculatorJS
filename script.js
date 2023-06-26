//all buttons
const displayCalc = document.querySelector(".display");
const displayTotal = document.querySelector(".display-total");
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




//functionality to the buttons (numbers)
//limitFunction can be found below, it just keeps all functions that work to limit symbols and numbers

zero.addEventListener("click", function(){
  operationArray.push(0);
  limitFunction();
})
one.addEventListener("click", function(){
  operationArray.push(1);
  limitFunction();
})
two.addEventListener("click", function(){
  operationArray.push(2);
  limitFunction();
})
three.addEventListener("click", function(){
  operationArray.push(3);
  limitFunction();
})
four.addEventListener("click", function(){
  operationArray.push(4);
  limitFunction();
})
five.addEventListener("click", function(){
  operationArray.push(5);
  limitFunction();
})
six.addEventListener("click", function(){
  operationArray.push(6);
  limitFunction();
})
seven.addEventListener("click", function(){
  operationArray.push(7);
  limitFunction();
})
eight.addEventListener("click", function(){
  operationArray.push(8);
  limitFunction();
})
nine.addEventListener("click", function(){
  operationArray.push(9);
  limitFunction();
})



//buttons no numbers--------------

ac.addEventListener("click", function(){
  operationArray = [0];
  totalArray = [0];
  showDisplay();
  displayTot();
})

posneg.addEventListener("click", function(){
  if(operationArray[0] === "-"){
    operationArray.shift();
    
  }else if(operationArray[0] != "-"){
    operationArray.unshift("-")
    addZero();
  }
  showDisplay();
})

perc.addEventListener("click", function(){
  operationArray.push("%");
  showDisplay();
  changeDisplay();
})
slash.addEventListener("click", function(){
  operationArray.push("/");
  showDisplay();
  changeDisplay();
})
multi.addEventListener("click", function(){
  operationArray.push("*");
  showDisplay();
  changeDisplay();
})
add.addEventListener("click", function(){
  operationArray.push("+");
  showDisplay();
  changeDisplay();
})
minus.addEventListener("click", function(){
  operationArray.push("-");
  showDisplay();
  changeDisplay();
})

point.addEventListener("click", function(){
  operationArray.push(",");
  showDisplay();
  doubleComa();
})








//only characters accepted
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operandSymbols = ["*", "/", "-", "+", "%"];


//array to make operations
let operationArray = [0];


//show the array on display
function showDisplay(){
  let displayString = operationArray.join("");
  displayCalc.innerHTML = displayString;
  
}


//remove first item of array if 0
function removeZero(){
  if(operationArray[0] === 0 && operationArray[1] === ","){
    return
  }else if(operationArray[0] === 0 && operationArray[1] != ","){
    operationArray.shift();
  }
}
removeZero();

//add 0 to the array if its empty
function addZero(){
  if(operationArray.length === 0){
    operationArray.push(0);
  }
}
addZero();

//limit the number of numbers to operate
function limitArray(){
  if(operationArray.length > 10){
    operationArray.pop();
  }
}
limitArray();

//avoid operands at first index of array
function firstOperand(){
if (operandSymbols.includes(operationArray[0] && operationArray[0] != "-")) {
  operationArray.shift();
}}
firstOperand();

//keep all limitation functions in one
function limitFunction(){
  removeZero();
  firstOperand();
  limitArray();
  showDisplay();
  doubleComa();
};

//disable double " , "
function doubleComa(){
  if(operationArray.includes(",")){
    point.disabled = true;
  }else if(!operationArray.includes(",")){
    point.disabled = false;
  }
}
doubleComa();


//top screen

//array to show operands and total
let totalArray = [0];
let displayString2;

//show top display and limit total character to avoid overflow
function displayTot(){
  
 if(Array.isArray(totalArray)){
  displayString2 = totalArray.join("");
  displayTotal.innerHTML = displayString2;}else{
    displayString2 = totalArray;
    displayTotal.innerHTML = displayString2;
  }
  
  if(totalArray.length > 15){
    totalArray.pop();
  }
}


function changeDisplay(){
  totalArray = operationArray;
  operationArray = [0];
  showDisplay();
  displayTot();
}



//equal button makes calculation based on total array last item

equal.addEventListener("click", function(){
  calculation();
})


function calculation(){
  let operand = totalArray.pop();

  let numberA;
  let numberB;


  if(totalArray.includes(",") || operationArray.includes(",")){
    numberA = parseFloat(totalArray.join(""))
    numberB = parseFloat(operationArray.join(""));
  }else{
      numberA = parseInt(totalArray.join(""))
      numberB = parseInt(operationArray.join(""));
    }

  switch(operand){
    
    case "/":
        totalArray = numberA / numberB;
        operationArray = [0];
        showDisplay();
        displayTot();
        break;

      case "*":
        totalArray = numberA * numberB;
        operationArray = [0];
        showDisplay();
        displayTot();
        break;

      case "-":
        totalArray = numberA - numberB;
        operationArray = [0];
        showDisplay();
        displayTot();
        break;

      case "+" :
        totalArray = numberA + numberB;
        operationArray = [0];
        showDisplay();
        displayTot();
        break;

        case "%" :
          totalArray = (numberA / numberB) * 100;
          operationArray = [0];
          showDisplay();
          displayTot();
          break;
  }}


  