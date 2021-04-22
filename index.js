// Your code here
class Polygon {
    constructor(sidesArray){
        this.sides = sidesArray
    }

    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce(
            (memo, current) => memo + current
        )
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (this.countSides ===3){
            const s1 = this.sides[0]
            const s2 = this.sides[1]
            const s3 = this.sides[2]
            return ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1))
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.countSides === 4){
            const s1 = this.sides[0]
            return this.sides.every( element => element === s1)
        }
    }
    get area(){
        if(this.isValid){ return this.sides[0]**2}
        else{ return 'not a square'}
    }
}
