// Your code here

class Polygon {
  constructor(side){
    this.side = side
  }
  get countSides() {
    return this.side.length
    // if sides = 3, return triangle
  }
  get perimeter() {
    return this.side.reduce((sum, currentSide) => sum + currentSide, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    return ((this.side[0] + this.side[1] > this.side[2]) && (this.side[1] + this.side[2] > this.side[0]) && (this.side[2] + this.side[0] > this.side[1]));
  }
}

class Square extends Polygon {
  get isValid() {
    return ((this.side[0] === this.side[1]) && (this.side[0] === this.side[2]) && (this.side[0] === this.side[3]));
  }

  get area() {
    return (this.side[0] * 5);
  }
}
