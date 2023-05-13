const displayCalc = document.querySelector(".display");
const displayResult = document.querySelector(".display-total");
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





//numero max 16 character on display
let calculation = [9,3,5];

function showDisplay(){
    
    if(calculation.length >+ 16){
        const index = 16;
        calculation.splice(index);
    }
    stringResult = calculation.join("");
    displayCalc.textContent = stringResult;

    if(calculation[0] === 0 && !0.){
        calculation.shift();
    }
     
}

showDisplay();



//top display: shows result of calculation
const result = [0];

function displayTotal (){
    if(result.length >+ 16){
        const index = 16;
        result.splice(index);
    }

    stringTotal = result.join("");
    displayResult.textContent = stringTotal;
    
}

displayTotal();



function addNumber(){
    nine.addEventListener('click',function(){  
        calculation.push(9);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    eight.addEventListener('click',function(){  
        calculation.push(8);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    seven.addEventListener('click',function(){  
        calculation.push(7);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    six.addEventListener('click',function(){  
        calculation.push(6);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    five.addEventListener('click',function(){  
        calculation.push(5);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    four.addEventListener('click',function(){  
        calculation.push(4);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    three.addEventListener('click',function(){  
        calculation.push(3);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    two.addEventListener('click',function(){  
        calculation.push(2);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    one.addEventListener('click',function(){  
        calculation.push(1);
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })
    //toggle minus or plus number
    posneg.addEventListener('click',function(){  
        minusFlag = !minusFlag;
        if(minusFlag === true){
        calculation.unshift("-");}
        else if(minusFlag === false){
            calculation.shift("-");
        }
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })

    ac.addEventListener('click',function(){
        calculation = [0];
        calculation.innerHTML = calculation.join("");
        showDisplay();
        console.log(calculation);
    })
}

let minusFlag = false;
addNumber();


const operandsArray = ["%", "+", "*", "/"];
//add operands

function addOperand(){
    perc.addEventListener("click", function(){
        calculation.push("%");
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })

    slash.addEventListener("click",function(){
        calculation.push("/");
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })

    multi.addEventListener("click", function(){
        calculation.push("*");
        calculation.innerHTML = calculation.join("");
        showDisplay();
        
    })

    minus.addEventListener("click", function(){
        calculation.push("-");
        calculation.innerHTML = calculation.join("");
        showDisplay();

    })

    add.addEventListener("click", function(){
        calculation.push("+");
        calculation.innerHTML = calculation.join("");
        showDisplay();
    })

if (["+","-","*","/"].includes(calculation[0])) {
        calculation.shift();
        
}

    }
addOperand();





//calculations

/*function calculationResult() {
    equal.addEventListener("click",function(){
    let resultCalc = parseFloat(calculation[0]);
  
    for (let i = 1; i < calculation.length; i += 2) {
      const operator = calculation[i];
      const operand = parseFloat(calculation[i + 1]);
  
      switch (operator) {
        case "+":
          resultCalc += operand;
          break;
        case "-":
          resultCalc -= operand;
          break;
        case "*":
          resultCalc *= operand;
          break;
        case "/":
          resultCalc /= operand;
          break;
        case "%":
        resultCalc %= operand;
        break;
      }
    }
  
    result.push(resultCalc);
  })}
  calculationResult();*/
  