// Your code here
class Polygon {
    constructor(array) {
        this.sides = array;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let peri = this.sides.reduce( (accu, side) => {
            return accu + side;
        }, 0);
        return peri;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let test1 = 0;
        let test2 = 0;
        let test3 = 0;
        (this.sides[0] + this.sides[1] > this.sides[2]) ? test1 = 1 : test1 = 0;
        (this.sides[1] + this.sides[2] > this.sides[0]) ? test2 = 1 : test2 = 0;
        (this.sides[2] + this.sides[0] > this.sides[1]) ? test3 = 1 : test3 = 0;
        if (test1 + test2 + test3 === 3) {
            return true;
        } else {
            return false;
        }

    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[2] === this.sides[3]) {
            return true; 
        } else {
            return false;
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] * this.sides[1];
        }
    }
}

