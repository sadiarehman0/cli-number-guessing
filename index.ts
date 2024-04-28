#! /usr/bin/env node

import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);


 const answers = await inquirer.prompt([
     {
    name : "userguessednumber",
   type : "number",
    message : "please guess a number 1-10: ",    
 },
 ]); 

 if (answers.userguessednumber === randomnumber) {
 console.log("congratulations! you guessed right number.");
 } else {
    console.log("you guessed wrong number.");

 }