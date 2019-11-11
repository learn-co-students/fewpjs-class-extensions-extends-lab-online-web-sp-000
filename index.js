class Polygon {
  constructor (sides){
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, side) => total + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let first = this.sides[0] + this.sides[1] >= this.sides[2];
    let second = this.sides[1] + this.sides[2] >= this.sides[0];

    return first && second;
  }
}

class Square extends Polygon {
  get isValid() {
    let first = this.sides[0] == this.sides[1];
    let second = this.sides[2] == this.sides[3];
    let third = this.sides[1] == this.sides[2];

    return first && second && third;
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}
