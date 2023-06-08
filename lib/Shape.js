// write shapes classes
// triangle, circle, square, maybe generic shape super class
// shapes have: color, x and y for origins on the page, rectangles and circles have their own point conventions and traingles use polygon they need a render() method and a setColor method for tests



// NOTE: THE SIZE OF THE SVG WILL BE 300X200
// render text in index.js?
class Shape{
    constructor(color){
        this.color = color;
    }
    render(){
        console.log("This will get overriden for specific shapes");
    }
    
}
module.exports = Shape;
// rectangles and circles have x,y coord origin points
// rectangles have width and height <rect width="100" height="100" />
// circle origin coords are called cx and cy and the have a radius called r <circle cx="50" cy="50" r="50" />
// a triangle is made using apoly gon with 3 sets of points <polygon points="200,10 250,190 160,210" />