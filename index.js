// Your code here
class Polygon {
  constructor(sideLengths) {
  this.sideLengths = sideLengths;
  }
  
  get countSides() {
    return this.sideLengths.length;
  }
  
  get perimeter() {
    return this.sideLengths.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3 && 
    this.sideLengths[0] + this.sideLengths[1] > this.sideLengths[2] &&
    this.sideLengths[1] + this.sideLengths[2] > this.sideLengths[0] &&
    this.sideLengths[2] + this.sideLengths[0] > this.sideLengths[1]) {
      return true 
    }
    else { 
      return false 
    }
  }
}

class Square extends Polygon {
  get area() {
    return (this.sideLengths[0])**2;
  }
  
  get isValid() {
    if(this.countSides === 4 &&
       this.sideLengths[0] === this.sideLengths[1] &&
       this.sideLengths[1] === this.sideLengths[2] &&
       this.sideLengths[2] === this.sideLengths[3]) {
      return true
    }
    else {
      return false 
    }
  }
}