class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((total, e) => total + e, 0)
  }
}

class Triangle extends Polygon {

  get isValid(){
    let [side1, side2, side3] = this.sides
    let check1 = side1 + side2 > side3
    let check2 = side2 + side3 > side1
    let check3 = side3 + side1 > side2
    let checks = [check1, check2, check3]


    return checks.every(Boolean)
  }
}

class Square extends Polygon{

  get area(){
    return this.sides[0] ** 2
  }

  get isValid(){
    return this.sides.every( e => e === this.sides[0] ) && this.sides.length === 4
  }
}
