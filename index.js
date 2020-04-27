class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce(function(acc, currentValue) { return acc + currentValue})
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sum1 = ((this.sides[0] + this.sides[1]) > this.sides[2]) ? true : false
    let sum2 = ((this.sides[0] + this.sides[2]) > this.sides[1]) ? true : false
    let sum3 = ((this.sides[1] + this.sides[2]) > this.sides[0]) ? true : false

    return [sum1, sum2, sum3].every(x => x === true)
  }
}

class Square extends Polygon {
  get isValid() {
    const sameSides = this.sides.filter( x => x === this.sides[0])
    return this.sides[0] > 0 && sameSides.length === 4 ? true : false
  }

  get area() {
    return Math.pow(this.sides[0], 2)
  }
}
