class Polygon {
  constructor(data) {
    this.data = data
  }

  get countSides() {
    return this.data.length
  }

  get perimeter() {
    return this.data.reduce(function(a, b) {
      return a + b
    })
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.data[0] + this.data[1] > this.data[2] &&
    this.data[0] + this.data[2] > this.data[1] &&
    this.data[1] + this.data[2] > this.data[0]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.data[0] === this.data[1] &&
        this.data[1] === this.data[2] &&
        this.data[2] === this.data[3]) {
      return true
    } else {
      return false
    }
  }

  get area() {
    return this.data[0] ** 2
  }
}