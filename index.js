// Your code here

class Polygon {
  constructor(arrayOfSides) {
    this.sides = arrayOfSides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sides;
    return !!(a + b > c && b + c > a && a + c > b);
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every((side) => side === this.sides[0]);
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
