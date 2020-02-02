// Your code here

class Polygon {
  constructor(arr) {
    this.array = arr
  }
  
  get countSides() {
    return this.array.length
  }
  
  get perimeter() {
    return this.array.reduce((acc, value) => acc + value, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.countSides === 3) {
      if(this.array[0] + this.array[1] > this.array[2] && this.array[0] + this.array[2] > this.array[1] && this.array[1] + this.array[2] > this.array[0]) {
        return true
      }
    }
    return false
  }
}
  
class Square extends Polygon {
  get isValid() {
    if(this.array[0] === this.array[1] && this.array[0] === this.array[2] && this.array[2] === this.array[3]) {
      return true
    }
    return false
  }
  
  get area() {
    return this.array[0] * this.array[1]
  }
}