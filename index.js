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
    return this.sides.reduce(function (num1, num2, num3) {
      if (!num1 || !num2 || !num3) {
        return false;
      }
      const con1 = num1 + num2 > num3;
      const con2 = num2 + num3 > num1;
      const con3 = num3 + num1 > num2;
      return true;
    });
  }
}
