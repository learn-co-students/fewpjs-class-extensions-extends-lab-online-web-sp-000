// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for ( let i = 0; i < this.sides.length; i++) {
      sum += this.sides[i];
    }
    return sum
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
      if (this.count !== 3) return;
      let a = this.sides[0]
      let b = this.sides[1]
      let c = this.sides[2]
      return ((a + b > c) && (a + c > b) && (b + c > a))
    // the sum of the lengths of any two sides of a tiangle is greatert han the length of the thrid side. if you take the three sides of a trianald and add them in paris, the sum is greatino than (not equal to) the thrid side. If that is not true, then it is not possible to construct a trianld w ith the given side lengths.
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
      return ((a === b) && (a === c) && (a === d))
  }

  get area() {
    if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
        return this.sides[1] * this.sides[2]
  }
}
