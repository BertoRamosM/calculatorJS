const displayResult = document.querySelector(".display");
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




//numero max 11 character
const result = [9,8,4,8,4,1,9,9,4,4,9,8,7,7,8,7,7,7];

function showDisplay(){
    //block characters at 11
    if(result.length >+ 11){
        const index = 11;
        result.splice(index);
    }
    stringResult = result.join("");
    displayResult.textContent = stringResult;
    

    
    
    
}

showDisplay();
console.log(result.length)