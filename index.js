// Your code here

class Polygon {
    constructor(sides) {
      this.sides = sides
    }
   

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        const reducer = (sumOfSides, currentSide) => {return sumOfSides + currentSide}
        return this.sides.reduce(reducer)
    }

  }
   
class Triangle extends Polygon {

    get isValid(){
        const conditionOne = this.sides[0] + this.sides[1] > this.sides[2]
        const conditionTwo = this.sides[0] + this.sides[2] > this.sides[1]
        const conditionThree = this.sides[1] + this.sides[2] > this.sides[0]
        
        return conditionOne && conditionTwo && conditionThree

    }
}


   
class Square extends Polygon {

    get isValid(){
        return this.sides.every((val, i, arr) => val === arr[0])
    }    

    get area(){
        return this.sides[0] * this.sides[1]
    }
  }
   
