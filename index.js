// Your code here
class Polygon {
  constructor(side) {
    // super();
    this.side = side;
  }

  get countSides() {
    return this.side.length;
  }

  get perimeter() {
    // return this.side.reduce((a , b) => b + a); 
    let sum = 0;
    for (var i of this.side) {
      sum += i;
    }
    return sum;
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
