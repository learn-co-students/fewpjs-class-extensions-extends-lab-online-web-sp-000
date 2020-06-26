class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, num) => acc + num)
    }
}

class Triangle extends Polygon {
    get isValid() {
        for (const side of this.sides) {
            if ((this.perimeter - side) <= side) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        for (const side of this.sides) {
            if (side != (this.perimeter/4)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    get area() {
        return this.sides[0] ** 2
    }
}