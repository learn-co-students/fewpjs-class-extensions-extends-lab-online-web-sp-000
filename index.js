// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((side, total) => total + side)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (!this.sides.length === 3)  { return false }
        let sortedSides = this.sides.sort()
        let side1 = sortedSides[0]
        let side2 = sortedSides[1]
        let side3 = sortedSides[2]
        return (side3 > (side1+side2) ? false : true) 
    }
}

class Square extends Polygon {
    get isValid(){
        return this.sides.every(side => side === this.sides[0])
    }
    get area(){
        if (this.isValid){
            return Math.pow(this.sides[0], 2)
        }
    }
}