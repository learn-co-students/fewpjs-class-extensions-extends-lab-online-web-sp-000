// Your code here
class Polygon {
    constructor(array){
        this.sideLengths = array
    }

    get countSides(){
        return this.sideLengths.length
    }

    get perimeter(){
        let perimeter = 0
        return this.sideLengths.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        this.sideLengths.sort()
        return !!(this.sideLengths[2]<(this.sideLengths[1]+this.sideLengths[0]))
    }
}

class Square extends Polygon {
    get area(){
        return this.sideLengths[0]**2
    }

    get isValid(){
        return !(this.sideLengths.find(e => e !== this.sideLengths[0]))
    }
}