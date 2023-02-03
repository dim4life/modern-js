class Rectangle {
    constructor(height, width){
        this.height = height, //height is going to be a property of the class
        this.width = width; //width is going to be a property of the class
    }

    area(){
        console.log(`The area of the rectangle is ${this.height * this.width}`);
    }
}

class Square extends Rectangle { //extends mean inheritance
    constructor(side){
        super(side, side)
    }
}

const rectangle1 = new Rectangle(7, 2);
const rectangle2 = new Rectangle(5, 3);
// console.log(rectangle1.height)
// rectangle1.area();

rectangle2.area = function(){console.log('new implementation')}
// rectangle2.area();

//advantages of using classes is being able to reuse code

const square1 = new Square(5);
square1.area();

