// Your code here

class Polygon {
  
  constructor(array) {
    this.sides = array;
  }
  
  get countSides() {
    // console.log(this.sides)
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce((accumulator, element) => {return element + accumulator});
  }
  
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3 && this.sides[0] + this.sides[1] > this.sides[2] && this.sides[2] + this.sides[1] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]) {
      return true;
    } else {
      return false;
    };
  };
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4 && this.sides[0] === this.sides[2] && this.sides[1] === this.sides[3]) {
      return true;
    } else {
      return false;
    };
  };
  
  get area() {
    return this.sides[0] * this.sides[1]
  }
}