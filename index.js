class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray
  }

  get countSides() {
    return this.sidesArray.length
  }

  get perimeter() {
    return this.sidesArray.reduce((acc, val) => {
      return acc + val;
    }, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2] && this.sidesArray[0] + this.sidesArray[2] > this.sidesArray[1] && this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sidesArray[0] === this.sidesArray[1] && this.sidesArray[0] === this.sidesArray[2] && this.sidesArray[0] === this.sidesArray[3] ? true : false
  }

  get area() {
    if (this.isValid) {
      return this.sidesArray[0] * this.sidesArray[1]
    } else {
      return 'This is not a square.'
    }
  }
}