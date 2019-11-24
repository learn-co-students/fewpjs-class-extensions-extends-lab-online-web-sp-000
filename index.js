// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sideOne = this.sides[0]
    let sideTwo = this.sides[1]
    let sideThree = this.sides[2]

    if (this.sides.length === 3)
      return ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideThree + sideTwo > sideOne));
  }
}

class Square extends Polygon {
  get isValid() {
    let sideOne = this.sides[0]
    let sideTwo = this.sides[1]
    let sideThree = this.sides[2]
    let sideFour = this.sides[3]

    if (this.sides.length === 4)
      return (sideOne === sideTwo && sideOne === sideThree && sideOne === sideFour);
  }

  get area() {
    return Math.pow(this.sides[0], 2);
  }
}
