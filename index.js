class Polygon {
  constructor(array) {
    this.sides = array;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
   return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.countSides === 3 && 
    this.sides[0] + this.sides[1] > this.sides[2] &&
    this.sides[1] + this.sides[2] > this.sides[0] &&
    this.sides[0] + this.sides[2] > this.sides[1];
  }
}

class Square extends Polygon {
  get isValid() {
    return this.countSides === 4 && this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}