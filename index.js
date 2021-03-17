// Your code here
class Polygon {
    constructor(sidesArr) {
        this.sidesArr = sidesArr
    }

    get countSides() {
        return this.sidesArr.length
    }

    get perimeter() {
        return this.sidesArr.reduce((a, b) => a + b, 0)
    }
}


class Triangle extends Polygon {
    
    get isValid() {
      let sides = this.sidesArr.sort()
      return (sides[2] < (sides[0] + sides[1]))
    }
}

class Square extends Polygon {
    get isValid() {
        let sides = new Set(this.sidesArr)
        return (sides.size === 1)
    }

    get area() {
        return (this.sidesArr[0] ** 2)
    }
  
}