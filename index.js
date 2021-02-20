// Your code here


class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
          }, 0)
          

    }
}

class Triangle extends Polygon {
    get isValid() {
        if ( (this.sides[0] + this.sides[1] > this.sides[2]) &&
        (this.sides[1] + this.sides[2] > this.sides[0]) && 
        (this.sides[0] + this.sides[2] > this.sides[1]) ) {
            return true;
        } else {
            return false;
        }
   }


}

class Square extends Polygon {
    
    get isValid() {
        if ( this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2

        }
    }
}