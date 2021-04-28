class Polygon {
  constructor(sides) {
    this._sides = sides
  }

  get countSides() {
    return this._sides.length;
  }

  get perimeter() {
    return this._sides.reduce((acc, curr) => acc + curr, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this._sides[0] + this._sides[1] < this._sides[2]) {
      return false;
    } else if (this._sides[1] + this._sides[2] < this._sides[0]) {
      return false;
    } else if (this._sides[2] + this._sides[0] < this._sides[1]) {
      return false;
    } else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this._sides[0] !== this._sides[1]) {
      return false;
    } else if (this._sides[1] !== this._sides[2]) {
      return false;
    } else if (this._sides[2] !== this._sides[3]) {
      return false;
    } else {
      return true;
    }
  }

  get area() {
    return this._sides[0] * this._sides[0];
  }
}
