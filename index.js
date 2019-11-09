// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((sum, x) => x + sum);
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.sides.every((x, i, arr) => arr.filter((y, j) => j !== i).reduce((y, sum) => y + sum) > x);
  }
}

class Square extends Polygon {
  get isValid() {
    for (let i = 1; i < this.sides.length; i++) {
      if (this.sides[i-1] !== this.sides[i]) {
        return false;
      }
    return true;
    }
  }
  get area() {
    return this.sides[0] ** 2;
  }
}
