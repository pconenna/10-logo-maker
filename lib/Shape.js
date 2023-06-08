
class Shape{
    constructor(color){
        this.color = color;
    }
    render(){
        console.log("This will get overriden for specific shapes");
    }
    
}
module.exports = Shape;
