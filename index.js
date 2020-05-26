// Your code here

class Polygon {
    constructor(array_integers) {
        this.array_integers = array_integers;
    }

    get countSides() {
        return this.array_integers.length;
    }

    get perimeter() {
        return this.array_integers.reduce((sum, side) => sum + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        return ((this.array_integers[0] + this.array_integers[1] > this.array_integers[2]) && (this.array_integers[1] + this.array_integers[2] > this.array_integers[0]) && (this.array_integers[2] + this.array_integers[0] > this.array_integers[1]));
    }
}

class Square extends Polygon {
    get isValid() {
        return ((this.array_integers[0] === this.array_integers[1]) && (this.array_integers[0] === this.array_integers[2]) && (this.array_integers[0] === this.array_integers[3]));
    }

    get area() {
        return (this.array_integers[0] ** 2);
    }
}