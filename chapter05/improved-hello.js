const fName = prompt('Enter First Name');
const lName = prompt('Enter last Name');
function sayHello(firstName,lastName) {
    const message = `Hello, ${fName} ${lName}`;
    return message;
    
}
sayHello();