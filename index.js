class Polygon {
  constructor(intArray) {
    this._sides = intArray
  }
  get countSides() {
    return this._sides.length
  }

  get perimeter() {
    return this._sides.reduce((accum, currentVal) => accum + currentVal)
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this._sides[0] + this._sides[1] > this._sides[2] && this._sides[0] + this._sides[2] > this._sides[1]  && this._sides[1] + this._sides[2] > this._sides[0] && this.countSides === 3
  }
}

class Square extends Polygon {
  get isValid() {
    for (let i = 0; i < this._sides.length; i++) {
      if (this._sides[i] !== this._sides[0]) {
        return false
      }
    }
    return true
  }

  get area() {
    return this._sides[0] * this._sides[0]
  }
}
