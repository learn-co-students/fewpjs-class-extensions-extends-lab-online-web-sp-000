// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce((total, side) => total + side);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      
      const firstValid = this.sides[0] < this.sides[1] + this.sides[2];
      const secondValid = this.sides[1] < this.sides[0] + this.sides[2]; 
      const thirdValid = this.sides[2] < this.sides[0] + this.sides[1];
      
      return firstValid && secondValid && thirdValid;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      const sideLength = this.sides[0];
      let valid = true;
      for (let i = 1; i < 4; i++) {
        if (this.sides[i] != sideLength) {
          valid = false;
        }
      }
      return valid;
    } else {
      return false;
    }
  }
  
  get area() {
    if (this.isValid) {
      return this.sides[0] * this.sides[0];
    }
  }
}