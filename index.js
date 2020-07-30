// Your code here
class Polygon {
    constructor (side) {
        this.side = side
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
        return this.side.reduce((a, c) => a + c)
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (
            this.side.length === 3 &&
            this.side[0] + this.side[1] > this.side[2] &&
            this.side[0] + this.side[2] > this.side[1] &&
            this.side[1] + this.side[2] > this.side[0]

        )
    }
}

class Square extends Polygon {
    get isValid() {
        return (
            this.side.length === 4 &&
            this.side[0] === this.side[1] &&
            this.side[1] === this.side[2] &&
            this.side[2] === this.side[3]
        )
    }

    get area() {
        return this.side[0] * this.side[1]
    }
} 

