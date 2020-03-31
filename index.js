class Polygon {
    constructor(arrayOfSides) {
        this.sides = arrayOfSides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
       return this.sides.reduce((a, b) => a + b)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.sides.length === 3) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            return (a + b > c) && (a + c > b) && (b + c > a)
        }
        //check if 3 sides
        //define side1, side2, side3
        //check lengths based on equation
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.sides.length === 4) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
            return (a == b && b == c && c == d)
        }

    }
    get area() {
        return this.sides[0] * this.sides[0]
    }

}