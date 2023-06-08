class Circle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<circle cx="50" cy="50}" r="50" fill="${this.color}" />`
    }
}
module.exports = Circle;