// Your code here
class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((t, e) => t + e)
      }

}

class Triangle extends Polygon {
    get isValid(){
      const perimeter = this.perimeter
      let vtri = true
      this.sides.forEach(function(side){
        if (!(side < perimeter - side)) {
          vtri = false
        }
      })
      return vtri
    }
  }
  
  class Square extends Polygon {
    get isValid(){
      return !!(this.sides[0]==this.sides[1] && this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3])
    }
  
    get area(){
      return this.sides[0]**2
    }
  }