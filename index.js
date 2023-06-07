const inquirer = require("inquirer");
const fs = require('fs');
function init(){
    inquirer.prompt([
        {
            type: 'input', 
            message: 'Enter logo text (3 character maximum)',
            name: 'text'
        },
        {
            type: 'input', 
            message: 'Enter text color',
            name: 'textColor'
        },
        {
            type: 'checkbox', 
            message: 'Choose a shape',
            choices: ['circle','square','triangle'],
            name: 'shape'
        },
        {
            type: 'input', 
            message: 'Enter shape color',
            name: 'shapeColor'
        }
    ]).then((response)=>{
        //call shape constructor with response data
        // placeholder code for now
        console.log(`Your logo will be a ${response.shapeColor} ${response.shape} that says ${response.text} in ${response.textColor} font.`)
    })
}

init();