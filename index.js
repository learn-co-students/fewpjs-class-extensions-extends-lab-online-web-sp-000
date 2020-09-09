// Your code here

class Polygon {
    constructor(array) {
        this.sides = array;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce( function(element, memo) { return element + memo}, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a, b, c] = this.sides;
        return a + b > c && b + c > a && c + a > b;
    }
}

class Square extends Polygon {
    get isValid() {
        let sideA = this.sides[0];
        return this.sides.every( element => element === sideA );
    }

    get area() {
        return this.sides[0] ** 2;
    }
}