// TODO: write the min() function
const min = (num1,num2) => {
    if (num1>num2){
        return num2;
    }else if (num2>num1) {
        return num1;
    }else {
        return "numbers are equal";
    }
    
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1