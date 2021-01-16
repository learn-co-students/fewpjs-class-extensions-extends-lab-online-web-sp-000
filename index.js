// Your code here
class Polygon {
    constructor(sidesArray) {
            this.sidesArray = sidesArray;
        }
        // 1) Polygon has a countSides getter method that returns the number of sides of the polygon
    get countSides() {
            return this.sidesArray.length;
        }
        //  2) Polygon has a perimeter getter that calculates perimeter
    get perimeter() {
        return this.sidesArray.reduce((acc, currSide) => acc + currSide);
    }
}


class Triangle extends Polygon {
    constructor(sidesArray) {
        super(sidesArray);
    }

    get isValid() {
        if (this.triangleHasValidSides() && this.countSides === 3) {
            return true;
        } else {
            return false;
        }
    }

    triangleHasValidSides() {
        return (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2] &&
            this.sidesArray[0] + this.sidesArray[2] > this.sidesArray[1] &&
            this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0]);
    }
}

class Square extends Polygon {
    constructor(sidesArray) {
        super(sidesArray);
    }

    // 7) calculates the area
    get area() {
            return this.sidesArray[0] * this.sidesArray[1];
        }
        // 8) checks for valid square

    get isValid() {
        // if sum of sides is even && num sides is 4
        if (this.squareHasEqualSides() && this.countSides === 4) {
            return true;
        } else {
            return false;
        }
    }

    squareHasEqualSides() {
        return (this.sidesArray[0] === this.sidesArray[1] &&
            this.sidesArray[0] === this.sidesArray[2] &&
            this.sidesArray[1] === this.sidesArray[2])
    }
}