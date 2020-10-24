// Your code here
class Polygon {
    constructor(array) {
        this.sides = array;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        const reducer = (acc, currentValue) => acc + currentValue;
        return this.sides.reduce(reducer);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        return ((a + b > c) && (a + c > b) && (b + c > a));
    }
}

class Square extends Polygon { 
    get isValid() {
        if ((this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3])) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] * this.sides[1];
    }
}