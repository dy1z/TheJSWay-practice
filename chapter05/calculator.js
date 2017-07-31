// TODO: complete program
const calculate = (num1,op,num2) => {
    if (op == "+"){
    	return num1+num2;
    } else if (op =="-") {
    	return num1-num2;
    } else if (op =="*") {
    	return num1*num2;
    } else if (op =="/") {
    	return num1/num2;
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity