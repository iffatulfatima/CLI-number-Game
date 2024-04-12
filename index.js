#! /usr/bin/env node
import inquirer from "inquirer";
// 1 computer will generate random number
// 2  user input for guessing number
// 3 compare user input with computer with generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6:"
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations!you guess right number");
}
else {
    console.log("oh!you guess a wrong number");
}
