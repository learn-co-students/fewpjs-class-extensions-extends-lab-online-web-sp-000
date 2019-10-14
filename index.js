// Your code here
class Polygon{
    constructor(intArray){
        this.sides = intArray; 
    }

    get countSides(){
        return this.sides.length 
    }

    get perimeter(){
        let sideSum = 0
        for(let side of this.sides){
            sideSum = sideSum + side 
        }
        return sideSum
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(((this.sides[0] + this.sides[1]) < this.sides[2]) || 
        ((this.sides[1] + this.sides[2]) < this.sides[0]) ||
        ((this.sides[2] + this.sides[0]) < this.sides[1])){
            return false
        } else {
            return true 
        }
    }
}

class Square extends Polygon{
    get isValid(){
      return this.sides.every((side) => {
          return side === this.sides[0]
      })
    }

    get area(){
        return this.sides[0] ** 2
    }
}