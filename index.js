class Polygon {
  constructor(array) {
    this.sides = array;
  }
    // Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array)
  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}


class Triangle extends Polygon {
    get isValid() {
      let firstSum = this.sides[0] + this.sides[1] > this.sides[2] ? true : false
      let secondSum = this.sides[0] + this.sides[2] > this.sides[1] ? true : false
      let thirdSum = this.sides[1] + this.sides[2] > this.sides[0] ? true : false

      return [firstSum, secondSum, thirdSum].every(x => x === true)
    }
}

class Square extends Polygon {
  get isValid() {
    const isSquare = (x) => x === this.sides[0];

    return this.sides.every(isSquare);
  }

  get area() {
    return Math.pow(this.sides[0], 2)
  }
}
