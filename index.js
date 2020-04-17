class Polygon {

    constructor(array) {
        this.array = array
    }

    get countSides() {
        console.log(`sides: ${this.array.length}`)
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (this.array.length === 3) {
            const sideA = this.array[0]
            const sideB = this.array[1]
            const sideC = this.array[2]

           return (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA)
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.array.length === 4) {
            const sideA = this.array[0]
            const sideB = this.array[1]
            const sideC = this.array[2]
            const sideD = this.array[3]

            return (sideA === sideB && sideB === sideC && sideC === sideD)
        } else {
            return false
        }
    }

    get area() {
        return this.array[0] * this.array[1];
    }
}