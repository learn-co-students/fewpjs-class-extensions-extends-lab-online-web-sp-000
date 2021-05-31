// Your code here

class Polygon {
    constructor(arr) {
        this.sides = arr
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

        if (this.countSides === 3) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            if (a + b > c && b + c > a && c + a > b) {
                return true

            } else {
                return false
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
            if (a === b && a === c && a === d) {
                return true
            } else {
                return false
            }
        }
    }
    get area() {
        return this.sides[0] ** 2
    }
}