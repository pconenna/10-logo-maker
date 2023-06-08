class Square extends Shape{
    constructor(color){
        super(color)

    }
    render(){
        // hard coded vlaues are subject to change
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`
    }
}
module.exports = Square;