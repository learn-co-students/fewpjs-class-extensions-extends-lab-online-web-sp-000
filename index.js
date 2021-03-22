class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides () {
       return this.sides.length
    }

    get perimeter () {
       return this.sides.reduce((a, b) => a + b, 0)
    }

}

class Triangle extends Polygon {
    get isValid () {
        if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0])) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid () {
        let valid = []
        for (let i = 0; i < this.sides.length; i++) {
            if (!valid.includes(this.sides[i])) {
                valid.push(this.sides[i])
            }
        }
        if (valid.length >= 2) {
            return false
        } else {
            return true
        }
    }

    get area () {
        return (this.sides[0] * this.sides[0])
    }
}