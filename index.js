const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
 
inquirer.registerPrompt('max-input', MaxLengthInputPrompt)
const fs = require('fs');
const gen = require('./generateSVG.js')
function init(){
    inquirer.prompt([
        {
            type: 'max-input', 
            message: 'Enter logo text (3 character maximum)',
            name: 'text',
            maxLength: 3
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
      fs.writeFile('./examples/logo.svg',gen(response),function(err){
        if(err) throw err;
      })
        
    })
}

init();