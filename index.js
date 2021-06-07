// Your code here

class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths;
  }

  get countSides() {
    return this.sideLengths.length;
  }

  get perimeter() {
    return this.sideLengths.reduce(function (total, amount) {
      return total + amount;
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.sideLengths[0] + this.sideLengths[1] > this.sideLengths[2] &&
      this.sideLengths[1] + this.sideLengths[2] > this.sideLengths[0] &&
      this.sideLengths[2] + this.sideLengths[0] > this.sideLengths[1]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let allEqual = this.sideLengths.every(
      (side) => side === this.sideLengths[0]
    );
    if (allEqual === true) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return (this.perimeter / 4) * (this.perimeter / 4);
  }
}
