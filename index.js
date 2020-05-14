// Your code here

class Polygon {
  constructor(arrayOfIntegers) {
    this.sides = arrayOfIntegers;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let acc = 0;
    let array = this.sides.slice();
    for (let i = 0; i< array.length; i++){
      acc = acc + array[i];
    };
    return acc;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    if (a + b <= c || a + c <= b || b + c <= a) {
      return false;
    } else {
      return true;
    }
  }
}

class Square extends Polygon {

  get isValid() {
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }

}