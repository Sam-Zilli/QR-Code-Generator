import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';

const getUrl = [ { 
    type : "input", 
    name : "urlRequested", 
    message : "Whats the URL you want a QR image for?" 
} ]

// npm package for getting user input 
inquirer 
    .prompt(getUrl) 
    .then((answers) => 
        { console.log("Here ya go...");
         console.log(qr.imageSync(answers.urlRequested)) }) 
    .catch((error) => { if (error.isTtyError) 
        { "Sorry, something went wrong." } 
        else 
        { "Sorry, something went wrong." } });