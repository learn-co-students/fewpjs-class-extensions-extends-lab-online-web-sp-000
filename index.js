class Polygon {
  constructor(sideArray) {
    this.sideArray = sideArray
  }

  get countSides() {
    return this.sideArray.length
  }

  get perimeter() {
    return this.sideArray.reduce(function(sum, side) {
      return sum + side
    }, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sideArray[0] + this.sideArray[1] <= this.sideArray[2]) {
      return false
    } else if (this.sideArray[1] + this.sideArray[2] <= this.sideArray[0]) {
      return false
    }
    return true
  }
}

class Square extends Polygon {
  get area() {
    return this.sideArray[0] * this.sideArray[0]
  }

  get isValid() {
    if (this.sideArray[0] == this.sideArray[1] && this.sideArray[2] && this.sideArray[3]) {
      return true
    }
    return false
  }
}