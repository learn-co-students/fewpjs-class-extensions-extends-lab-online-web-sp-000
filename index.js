// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return  this.sides.reduce((acc, val) => acc + val,0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] > this.sides[2]) {
      true;
    } else if (this.sides[0] + this.sides[2] > this.sides[1]) {
      true;
    } else if (this.sides[2] + this.sides[1] > this.sides[0]) {
      true;
    } else {
      false;
    }
  }
}

class Square extends Polygon {

}
