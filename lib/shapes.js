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
    setColor(c){ // the README is a little unclear I will ask a TA if this method is really needed or if I just need to test render()
        this.color = c;
    }
}

class Square extends Shape{
    constructor(color, width, height){
        super(color)
        this.width = width;
        this.height = height;
    }
    render(){
        // hard coded vlaues are subject to change
        return `<rect x="100" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }
}

class Circle extends Shape{
    constructor(color,cx,cy,r){
        super(color);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render(){
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    constructor(color,x1,y1,x2,y2,x3,y3){
        super(color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;

    }
    render(){
        return
    }
}
// rectangles and circles have x,y coord origin points
// rectangles have width and height <rect width="100" height="100" />
// circle origin coords are called cx and cy and the have a radius called r <circle cx="50" cy="50" r="50" />
// a triangle is made using apoly gon with 3 sets of points <polygon points="200,10 250,190 160,210" />