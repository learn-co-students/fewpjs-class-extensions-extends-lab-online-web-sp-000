// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, side) => total + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length === 3) {
            let sumOne = (this.sides[0] + this.sides[1])
            let sumTwo = (this.sides[1] + this.sides[2])
            let sumThree = (this.sides[0] + this.sides[2])
            if (sumOne < this.sides[2] || sumTwo < this.sides[0] || sumThree < this.sides[1]){
                return false
            }
            else {return true}
        }
        else {return false}
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.length === 4) {
            let sideOne = this.sides[0]
            let sideTwo = this.sides[1]
            let sideThree = this.sides[2]
            let sideFour = this.sides[3]
            if (sideOne === sideTwo && sideOne === sideThree && sideOne === sideFour){return true}
            else {return false}
        }
        else {return false}
    }

    get area() {
        return (this.sides[0] * this.sides[0])
    }
}