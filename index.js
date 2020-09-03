// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.countSides; i++) {
      sum = sum + this.sides[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let truthArray = [];
    let a = (this.sides[0] + this.sides[1]) > this.sides[2];
    let b = (this.sides[1] + this.sides[2]) > this.sides[0];
    let c = (this.sides[2] + this.sides[0]) > this.sides[1];
    truthArray.push(a, b, c);
    if (truthArray.includes(false)) {
      return false;
    } else {
      return true;
    }
    }
  }

  class Square extends Polygon {
    get isValid() {
      let truthArray = [];
      for (let i= 0; i < this.countSides; i++) {
        truthArray.push(this.sides[i] === this.perimeter/4);
      }
      if (truthArray.includes(false)) {
        return false;
      } else {
        return true;
      }
    }

    get area() {
      let area = this.sides[0]*this.sides[1];
      return area;
    }


  }
