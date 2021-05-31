class Polygon {
    constructor(integers) {
        this.integers = integers;
    }

    get countSides() {
        return this.integers.length;
    }

    get perimeter() {
        return this.integers.reduce((x, y) => x + y);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sides = this.integers;
        if (sides[0] + sides[1] > sides[2] && sides[0] + sides[2] > sides[1] && sides[1] + sides[2] > sides[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.perimeter / this.countSides === this.integers[0]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return (1 / 16) * (this.perimeter * this.perimeter);
    }
}