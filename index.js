class Polygon {
    constructor(array) {
      this.sides = array;
    }
  
    get countSides() {
      return this.sides.length
    }
  
    get perimeter() {
        return this.sides.reduce((a, b) => a + b)
      }
    }

class Triangle extends Polygon {

    get isValid() {
        if(this.countSides === 3) {
            let sidea = this.sides[0]
            let sideb = this.sides[1]
            let sidec = this.sides[2]
            return (sidea + sideb > sidec) && (sidea + sidec > sideb) && (sideb + sidec > sidea)
    }
  }
}
  
class Square extends Polygon {
    
    get isValid() {
        if(this.countSides === 4) {
            let sidea = this.sides[0]
            let sideb = this.sides[1]
            let sidec = this.sides[2]
            let sided = this.sides[3]
            return (sidea === sideb) && (sidec === sided)
    }
  }
  
  get area(){
    if(this.countSides === 4) {
      let a = this.sides[0]
      let b = this.sides[1]
      let c = this.sides[2]
      let d = this.sides[3]
      return a * b
    }
  }
}