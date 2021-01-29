// Your code here
class Polygon {
  constructor(array) {
    this.array = array
  }

  get countSides() {
    return this.array.length
    }

  get perimeter() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.array.reduce(reducer, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if ((this.countSides === 3) && ((this.array[0] === this.array[1]) || (this.array[1] === this.array[3]) || (this.array[3] === this.array[0]))) {
      return true
    }
    else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.array.every(x => x === this.array[0])
  }

  get area() {
    return this.array[0] ** 2
  }
}
