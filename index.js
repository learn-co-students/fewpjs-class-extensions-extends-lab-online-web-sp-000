// Your code here
// Your code here
class Polygon {
  constructor(arrayofSides) {
    this.sides= arrayofSides;
  }
  // getter method that returns number of sides of the polygon
  get countSides() {
    return this.sides.length;
  }
  // perimeter getter that calculates perimeter
  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side );
  }
}

class Triangle extends Polygon{
  // has a perimeter getter inherited from Polygon
  // checks for valid triangle (lengths of 2 side
   // access to count and perimeter inheriteds > 3rd side)
  get isValid() {
    if (this.countSides !== 3) return false;
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2))
  }
}

class Square extends Polygon {
  // given 4 sides for a square is equal (valid)
  get isValid() {
    if (this.countSides !== 4) return false;
    
    let validator = true;
    this.sides.forEach(side => (validator = (side === this.sides[0])))
    return validator;

    // let side1 = this.sides[0];
    // let side2 = this.sides[1];
    // let side3 = this.sides[2];
    // let side4 = this.sides[3];
    // return ((side1 === side2) && (side1 === side3) && (side1 === side4));
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] * this.sides[1]
    } else {
      return "this is not a valid square"
    }
  }
}