class Polygon {
    constructor(sideArray) {
        this.sides = sideArray
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, current) => acc + current)
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.countSides === 3 && this.sideTest) ? true : false
    }

    get sideTest() {
        let resultArray = this.sides.map((side, index, array) => side < this.sumOfOtherSides(index, array))
        return resultArray.every( bool => bool === true )
    }
    sidesOtherThanIndex(index, array) {
        return array.slice(0, index).concat(array.slice(index + 1, array.length))
    }
    sumOfOtherSides(index, array) {
        return this.sidesOtherThanIndex(index, array).reduce((acc, side) => acc + side)
    }
}

class Square extends Polygon {
    get area() {
        return this.sides[0] ** 2
    }

    get isValid() {
        let side1 = this.sides[0]
        return this.sides.reduce((acc, side) => acc = side1 === side)
    }
}