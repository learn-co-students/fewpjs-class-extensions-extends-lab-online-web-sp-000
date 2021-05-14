// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const sum = (acc, currentValue) => acc + currentValue
        return this.sides.reduce(sum)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1]) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let side= this.sides[0]
        if (this.sides[0] === side && this.sides[1] === side && this.sides[2] === side && this.sides[3] === side) {
            return true
        } else {
           return false 
        }
    }

    get area() {
        return this.sides[0]**2
    }
}