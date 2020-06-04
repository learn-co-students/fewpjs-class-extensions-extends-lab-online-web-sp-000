class Polygon {
  constructor(parameters) {
    this.parameters = parameters;
  }

  get countSides() {
    return this.parameters.length;
  }

  get perimeter() {
    let perimeter = 0;
    for(let i=0; i<this.countSides; i++) {
      perimeter += this.parameters[i];
    }
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.parameters[0] + this.parameters[1] < this.parameters[2] ||
    this.parameters[1] + this.parameters[2] < this.parameters[0] ||
    this.parameters[0] + this.parameters[2] < this.parameters[1]) {
      return false;
    }
    return true;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.parameters[0] === this.parameters[1] &&
    this.parameters[1] === this.parameters[2] &&
    this.parameters[2] === this.parameters[3]) {
      return true;
    }
    return false;
  }

  get area() {
    return Math.pow(this.parameters[0], 2);
  }
}
