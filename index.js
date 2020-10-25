// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.count;
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        // if (this.count == 3) return 
        
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];

        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2]; 
        let side4 = this.sides[3];

        if (side1 == side2 == side3 == side4)
        return true;

        else if (side1 == side2 && side3 == side4)
        return true;
        else if (side1 == side4 && side3 == side2)
        return true;
        else if (side1 == side3 && side4 == side2)
        return true;

        else
        return false;
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}