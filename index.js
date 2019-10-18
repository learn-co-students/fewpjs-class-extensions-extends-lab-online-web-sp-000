class Polygon {
  constructor(sidesArray) {
    this._sidesArray = sidesArray;
  }

  get countSides() {
    return this._sidesArray.length;
  }

  get perimeter() {
    return this._sidesArray.reduce((total, side) => side + total);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      if (this._sidesArray[0] + this._sidesArray[1] > this._sidesArray[2] &&
        this._sidesArray[1] + this._sidesArray[2] > this._sidesArray[0] &&
        this._sidesArray[2] + this._sidesArray[0] > this._sidesArray[1]) {
          return true;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4 && this._sidesArray.every((side) => side === this._sidesArray[0])) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this._sidesArray[0] * this._sidesArray[0];
  }
}
