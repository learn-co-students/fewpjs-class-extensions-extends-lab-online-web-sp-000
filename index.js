class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce(function (num1, num2) {
      return num1 + num2;
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.sides.map(function(triangle1, triangle2){
      
    })
}
