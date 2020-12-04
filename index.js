class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, num) => { return total + num });
  }
}

class Triangle extends Polygon {
  get isValid() {
    const a = this.sides[0], b = this.sides[1], c = this.sides[2];
    return (a + b > c && b + c > a && a + c > b) ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    const a = this.sides[0], b = this.sides[1], c = this.sides[2], d = this.sides[3];
    return (a == b && b == c && c == d && d == a) ? true : false;
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}
