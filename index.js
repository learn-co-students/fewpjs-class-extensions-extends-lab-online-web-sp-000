class Polygon {
  constructor(arr) {
    this.arr = arr
  }
  
  get countSides() {
    return this.arr.length
  }
  
  get perimeter() {
    let total = 0
      for (let i = 0; i < this.arr.length; i ++){
        total += this.arr[i]
      }
    return total;
  }
}

class Triangle extends Polygon {
  
  get isValid(){ 
  if (this.arr.length !== 3) return;
    let side1 = this.arr[0]
    let side2 = this.arr[1]
    let side3 = this.arr[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
 
 get isValid() {
  if (!Array.isArray(this.arr)) return;
  if (this.arr.length !== 4) return;
    let side1 = this.arr[0]
    let side2 = this.arr[1]
    let side3 = this.arr[2]
    let side4 = this.arr[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
 }
 
   get area() {
    if (this.arr.length !== 4) return;
    return this.arr[0] * this.arr[0]
  }
  
}