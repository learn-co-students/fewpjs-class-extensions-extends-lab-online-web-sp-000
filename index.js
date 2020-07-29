// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape
class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }

    // Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
    get countSides () {
        return this.sides.length
    }

    // Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. 
    // This method will become accessible to its child classes.
    // Array.isArray  - Check whether an object is an array. This function returns true if the object is an array, and false if not
    get perimeter () {
        if (!Array.isArray(this.sides)) return;
        let sum = 0;
        for (let int of this.sides) {
            sum += int
        }
        return sum
    }
}

// Define a Triangle class that inherits from Polygon
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.
//  condition for valid check = The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
class Triangle extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

// Define a Square class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid.
// A square is valid when the lengths of all sides are equal.
// Use the get keyword to make a getter method area that calculates the area of the square.
class Square extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        return this.sides[0] * this.sides[0] 
    }
}