// Your code here
class Polygon {
    constructor(sidesArray){
        this.sidesArray = sidesArray
    }

    get countSides(){
        return this.sidesArray.length
    }

    get perimeter(){
        return this.sidesArray.reduce(((side, total)=> side + total),0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.sidesArray.find(e => e > (this.perimeter / 2))){
            return false
        }
        return true
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.sidesArray.find(e => e !== (this.perimeter / 4))){
            return false
        }
        return true
    }

    get area(){
        return (this.perimeter / 4)**2
    }
}