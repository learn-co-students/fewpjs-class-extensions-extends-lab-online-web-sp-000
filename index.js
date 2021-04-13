// Your code here
class Polygon {
  constructor(array) {
    this.array = array
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    return this.array.reduce((total, side) => total + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const a = this.array[0];
    const b = this.array[1];
    const c = this.array[2];
    const validTri = ((a + b) >  c) && ((a + c) > b) && ((b + c) > a);

    return validTri ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.array.every((value, i, arr) => value === arr[0] )
  }

  get area() {
    return this.array[0] ** 2;
  }
}