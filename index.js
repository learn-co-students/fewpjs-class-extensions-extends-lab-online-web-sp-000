class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray;
    }

    get countSides() {
        return this.sidesArray.length;
    }

    get perimeter() {
        return this.sidesArray.reduce((acc, currSide) => acc + currSide);
    }
}


class Triangle extends Polygon {

    get isValid() {
        if (this.triangleHasValidSides() && this.countSides === 3) {
            return true;
        }
        return false;
    }

    triangleHasValidSides() {
        return (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2] &&
            this.sidesArray[0] + this.sidesArray[2] > this.sidesArray[1] &&
            this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0]);
    }
}

class Square extends Polygon {

    get area() {
        return this.sidesArray[0] * this.sidesArray[1];
    }

    get isValid() {
        if (this.squareHasEqualSides() && this.countSides === 4) {
            return true;
        }
        return false;
    }

    squareHasEqualSides() {
        return (this.sidesArray[0] === this.sidesArray[1] &&
            this.sidesArray[0] === this.sidesArray[2] &&
            this.sidesArray[1] === this.sidesArray[2])
    }
}