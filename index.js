class Polygon {
    constructor(integerArray){
        this.sides = integerArray;
    }

    get countSides() {
        // returns the number of elements in the array (sides)
        return this.sides.length
    }

    get perimeter() {
        // calculates the sum of each index in the array (side)
        return this.sides.reduce((acc, cv) => acc + cv)
    }
}

class Triangle extends Polygon {


    get isValid() {
        // checks the triangle sides are valid
        // side a + side B must be greater than side c
        let sideA = this.sides[0]
        let combinedSide = this.sides[1] + this.sides[2]

        if (combinedSide < sideA){
            return false
        } else {
            return true 
        }

    }
}

class Square extends Polygon {
    get isValid() {
        if ((this.perimeter/ 4) == this.sides[0]){
            return true 
        } else {
            return false 
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}