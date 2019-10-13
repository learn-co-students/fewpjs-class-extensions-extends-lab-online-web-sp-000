// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
      let sum = 0
      for (var int of this.sides) {
          sum += int
      }
      return sum
  }
}

class Triangle extends Polygon{
  get isValid() {
    let s1 = this.sides[0]
    let s2 = this.sides[1]
    let s3 = this.sides[2]
    return ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1))
  }
}

class Square extends Polygon {
    get isValid() {
      let s1 = this.sides[0]
      let s2 = this.sides[1]
      let s3 = this.sides[2]
      let side4 = this.sides[3]
      return ((s1 === s2) && (s1 === s3) && (s1 === side4))
    }

    get area() {
      return this.sides[0] **2;
    }
}
