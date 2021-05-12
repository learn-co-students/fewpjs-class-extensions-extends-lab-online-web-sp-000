class Polygon {
   
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }
   
    get countSides() {
        return this.count
    }

    get perimeter() {
        return this.sides.reduce(function(memo, i) {
            return memo + i
        })
    }
}

class Triangle extends Polygon {

    get isValid() {
        let triangle = this.sides
        if (triangle[0] + triangle[1] > triangle[2] && triangle[1] + triangle[2] > triangle[0] && triangle[2] + triangle[0] > triangle[1] && this.count === 3) {
            return true
        }
        return false
    }
}

class Square extends Polygon {
    
    get isValid() {
        let square = this.sides
        if (square[0] === square[1] && square[1] === square[2] && square[2] === square[3]) {
            return true
        }
        return false
    }

    get area() {
        let areee = this.sides
        return areee[0] * areee[1]
    }
}
