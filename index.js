// Your code here

class Polygon {

    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter (){
        return this.sides.reduce((sum, side) => sum += side)
    }
}

class Triangle extends Polygon {

    get isValid(){
       let side1 = this.sides[0]
       let side2 = this.sides[1]
       let side3 = this.sides[2]

    return (side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)
    }

}
class Square extends Polygon {

    get area() {
       let side = this.sides[0]
       return side ** 2
    }

    get isValid(){
       let side1 = this.sides[0]
       let side2 = this.sides[1]
       let side3 = this.sides[2]
       let side4 = this.sides[3]

    return (side1 === side2) && (side2 === side3 ) && (side3 === side4)
    }

}
