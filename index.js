class Polygon {
    constructor(array) {
        this.intArray = array
    }

    get countSides() {
        return this.intArray.length
    }

    get perimeter() {
        return this.intArray.reduce((memo, num) => memo + num, 0)
    }
}