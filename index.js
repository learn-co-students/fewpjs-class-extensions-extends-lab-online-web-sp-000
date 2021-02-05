// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, element) => total + element, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const a = this.sides[0];
    const b = this.sides[1];
    const c = this.sides[2];
    const validTri = a + b > c && a + c > b && b + c > a;

    return validTri ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every((val, i, arr) => val === arr[0])
  }

  get area() {
    return this.sides[0] ** 2;
  }

}