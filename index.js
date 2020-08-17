// Your code here
class Polygon {
  constructor(array){
  this.sides = array
  this.count = array.length
    // initializer for this class
    // array -> represents the sides of the this polygon
  }
    get countSides(){
    return this.sides.length

    }

    get perimeter(){
      let sum = 0
      for ( let i = 0; i < this.sides.length; i++) {

        sum = sum + this.sides[i]
        // total equals the side of each array
        // sum = 0  + index[0] etc...
      }

      return sum
    }

}

class Triangle extends Polygon {
  // constructor(array){
  //   // this.sides = array
  // }
    get isValid(){
      if( this.count !== 3 ) return
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
        return side1 < side2 + side3 && side2 < side1 +side3 && side3< side1 +side2

      // we inherit countSides from Polygon class
      // next we see if the sides in this shape = 3?
    }


}

class Square extends Polygon {

  get isValid(){
    if (this.count !== 4) return
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
      return side1 === side2 && side2 ===side3 && side3 === side4

  }

  get area(){
    if (this.count !== 4) return
    // 
    return  this.sides[0] * this.sides[1]

}


}
// Use the `get` keyword to make a getter method `perimeter` that calculates the sum of
