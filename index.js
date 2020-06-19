// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let p = 0;
    for(let i = 0; i < this.sides.length; i++) {
      p += this.sides[i];
    }
    return p;
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.countSides === 3 && this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0];
  }
}

class Square extends Polygon {
  get isValid() {
    return this.countSides === 4 && this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3];
  }

  get area() {
    return this.sides[0] ** 2;
  }
}