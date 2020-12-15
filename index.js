// Your code here
class Polygon{
    constructor(sides){
        this.sides=sides
    }
    get countSides(){
        return this.sides.length

    }
    get perimeter(){
        let sum = this.sides.reduce((acc, val) => acc + val)
        return sum
    }

}

class Triangle extends Polygon{
    get isValid(){
        let num=this.sides.length
        let side1=this.sides[0]
        let side2=this.sides[1]
        let side3=this.sides[2]

        if(num===3 && side1+side2>side3 && side1 + side3>side2 && side2 + side3>side1){
            return true
        }
        else{
            return false
        }
    }

}

class Square extends Polygon{
    get area(){
      return this.sides[1]**2
    }
    get isValid(){
        let num=this.sides.length
        let side1=this.sides[0]
        let side2=this.sides[1]
        let side3=this.sides[2]
        let side4=this.sides[3]

        if(num===4 && side1===side2 && side2===side3 && side3===side4){
            return true
        }
        else{
            return false
        }
    }

}
