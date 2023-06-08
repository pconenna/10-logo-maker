# SVG Logo Maker

## Description
The logo maker takes user inputs on the command line and uses them to generate an svg logo with a shape background and text in the foreground. It asks the user to provide the text content and color along with the shape type and color. It will generate an svg file based on the provided paramters.
Link to video: https://drive.google.com/file/d/1H0ahecIQ2ysmGVTjC0d_Q-B6Czzo3p1e/view?usp=sharing 

## Installation
Anyone who wishes to try the app must clone the repo code.

## Usage
The user must run node index.js in the top level directory to run the app. The user will see the prompts for generating the logo. Type in the asnwers and press enter to submit the response. When picking a shape, use the arrow keys to cycle through the choices and select one. picking multiple options will result in the option closest to the top being used. picking no options will default to a circle. If the user does not specify text or text color, the prgram will pass the letters "svg" in white text to the file. If the user does not specify a shape color the shape will be black.

## Testing
Run npm run test to see the tests for the render methods of each shape class.
## Credits 
I worked alone. I found the Inquirer Max Length Input Prompt docs from a Google search.
https://www.npmjs.com/package/inquirer-maxlength-input-prompt 

## License 
Please refer to the license in the repo. 