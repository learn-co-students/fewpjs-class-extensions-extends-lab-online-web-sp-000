// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, sideLength) => total + sideLength);
    }
}

class Triangle extends Polygon {
    get isValid() {
        const half = this.perimeter / 2;
        if (this.countSides !== 3) {
            return false;
        } else if (this.sides.some((side) => side >= half)) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) {
            return false;
        } else if (this.sides[0] !== this.sides[1] || this.sides[1] !== this.sides[2] || this.sides[2] !== this.sides[3]) {
            return false;
        } else {
            return true;
        }
    }

    get area() {
        return this.sides[0] * this.sides[1];
    }
}