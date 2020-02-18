// Your code here

class Polygon {
  constructor(numOfSides) {
    this.numOfSides = numOfSides; 
    this.count = this.numOfSides.length
  }

  get countSides() {
    return this.count;
  }
  get perimeter() {
    let sum = 0;
    for (var num of this.numOfSides) {
      sum += num
    }
    return sum
    } 
}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3) return;
    let side1 = this.numOfSides[0]
    let side2 = this.numOfSides[1]
    let side3 = this.numOfSides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count !== 4) return;
    let side1 = this.numOfSides[0]
    let side2 = this.numOfSides[1]
    let side3 = this.numOfSides[2]
    let side4 = this.numOfSides[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area() {
    if (this.count !== 4) return;
    return this.numOfSides[0] * this.numOfSides[0]
  }
}