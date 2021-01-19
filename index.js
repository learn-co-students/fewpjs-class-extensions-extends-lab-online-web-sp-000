// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum += side)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]

    return (a + b > c) && (a + c > b) && (b + c > a)
  }
}

class Square extends Polygon {
  get area() {
    let a = this.sides[0]
    return a**2
  }

  get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]
    let d = this.sides[3]

    return (a == b) && (b == c) && (c == d)
  }
}