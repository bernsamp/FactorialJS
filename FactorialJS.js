const prompt = require("prompt-sync")({sigint:true});

const userInput = parseInt(prompt('Enter a positive integer: '));


if (userInput < 0){
    console.log('Error! Factorial for negative number does not exist.');
}

else if (userInput === 0){
    console.log(`The factorial of ${userInput} is 1.`);
}
else{
    let factorial = 1;
    for (let i = 1; i <= userInput; i++) {
        factorial *= i;
    }
    console.log(`The factorial of ${userInput} is ${factorial}.`);
}