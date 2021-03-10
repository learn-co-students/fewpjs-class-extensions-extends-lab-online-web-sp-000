// Your code here
class Polygon {
    constructor(array) {
        this.sides = array;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let acc = 0
        for (let i = 0; i < this.countSides; i++) {
            acc += this.sides[i];
        }
        return acc
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides > 3 || this.countSides < 3) {
            return false
        } else if (this.sides[0] + this.sides[1] < this.sides[2]) {
            return false
        } else if (this.sides[1] + this.sides[2] < this.sides[0]) {
            return false
        } else if (this.sides[2] + this.sides[0] < this.sides[1]) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides > 4 || this.countSides < 4) {
            return false
        } else {
            return (this.sides.reduce((a, b) => a + b, 0) / 4) === this.sides[0]
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2
        }
    }
}