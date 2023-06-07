// write shapes classes
// triangle, circle, square, maybe generic shape super class
// shapes have: color, x and y for origins on the page, rectangles and circles have their own point conventions and traingles use polygon they need a render() method and a setColor method for tests

// NOTE: THE SIZE OF THE SVG WILL BE 300X200
class Shape{
    constructor(color, text){
        this.color = color;
        this.text = text;
    }
    render(){
        console.log("This will get overriden for specific shapes");
    }
    setColor(c){ // the README is a little unclear I will ask a TA if this method is really needed or if I just need to test render()
        this.color = c;
    }
}

class Square extends Shape{
    constructor(color, text, width, height){
        super(color,text)
        this.width = width;
        this.height = height;
    }
}

// rectangles and circles have x,y coord origin points
// rectangles have width and height <rect width="100" height="100" />
// circle origin coords are called cx and cy and the have a radius called r <circle cx="50" cy="50" r="50" />
// a triangle is made using apoly gon with 3 sets of points <polygon points="200,10 250,190 160,210" />