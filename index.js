class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce(function (num1, num2) {
      return num1 + num2;
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    let triangle1 = this.sides;
    let triangle2 = this.sides;
  }
}
