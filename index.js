// Your code here
class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let calcPerimeter = 0;
        this.sides.forEach(function(value) {
            calcPerimeter += value;
        })
        return calcPerimeter;
    }
}

class Triangle extends Polygon {
    get isValid() {
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];

        if (this.countSides != 3) return false;

        if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        
        const filtered = this.sides.filter(value => value == this.sides[0])

        if (this.countSides != 4) return false;

        if (filtered.length == this.countSides) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] * this.sides[0];
    }
}