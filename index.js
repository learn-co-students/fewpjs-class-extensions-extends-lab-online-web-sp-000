// Your code here

class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray;
    };

    get countSides() {return this.sides.length};

    get perimeter() {return this.sides.reduce(function(total, num) {return total + num})};
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            return (this.sides[0] + this.sides[1] > this.sides[2] &&
                this.sides[0] + this.sides[2] > this.sides[1] &&
                this.sides[1] + this.sides[2] > this.sides[0])
        } else {return false};
    };
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            return (this.sides[0] === this.sides[1] &&
                this.sides[0] === this.sides[2] &&
                this.sides[0] === this.sides[3])
        } else {return false};
    };

    get area() {
        if (this.isValid) {return this.sides[0] ** 2} else {return false};
    }
}