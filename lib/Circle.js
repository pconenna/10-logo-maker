const Shape = require('./Shape.js');
class Circle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<circle cx="150" cy="115" r="50" fill="${this.color}" />`
    }
}
module.exports = Circle;