// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    //counts the number of sides
    get countSides() {
        return this.sides.length;
    }

    //calculates the sum of each side
    get perimeter() {
        return this.sides.reduce((side, i) => side + i, 0);
    }
}

//checks if the given 3 sides for a triangle is valid.
//The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
    }
}

//checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
class Square extends Polygon {
    get isValid() {
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
        let side4 = this.sides[3];

        return (side1 === side2) && (side2 === side3) && (side3 === side4);
    }

    //area = length * width
    get area() {
        return this.sides[0] * this.sides[1];
    }
}