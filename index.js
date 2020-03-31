class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let sum = this.sides.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sidesArray = this.sides
    let a = sidesArray[0]
    let b = sidesArray[1]
    let c = sidesArray[2]
    let valid = (a + b > c && a + c > b && b + c > a) ? true : false
    return valid
  }
}

class Square extends Polygon {
  get isValid() {
    let sidesArray = this.sides
    let singleValue = sidesArray[0]
    let isSquare = (currentValue) => currentValue === singleValue
    let valid = sidesArray.every(isSquare)
    return valid
  }

  get area() {
    let sidesArray = this.sides
    let singleValue = sidesArray[0]
    let area = singleValue ** 2
    return area
  }
}
