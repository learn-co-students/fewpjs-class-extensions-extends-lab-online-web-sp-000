// Your code here

class Polygon {
    constructor (sideArray) {
        this.sideArray = sideArray
    }

    get countSides(){
        return this.sideArray.length
    }

    get perimeter(){
        return this.sideArray.reduce((total, x) => x+total)
    }
}

class Triangle extends Polygon {
    get isValid (){
        let valid = false
        let sides01 = this.sideArray[0] + this.sideArray[1]
        let sides02 = this.sideArray[0] + this.sideArray[2]
        let sides12 = this.sideArray[1] + this.sideArray[2]
        if (this.sideArray.length === 3 ){
            if (sides01 > this.sideArray[2] && sides02 > this.sideArray[1] && sides12 > this.sideArray[0]){
                valid = true
            }
        }
        return valid
    }
}

class Square extends Polygon {
    get isValid (){
        let valid = false
        if (this.sideArray.length === 4 && this.sideArray.every( v => v === this.sideArray[0])){
            valid = true
        }
        return valid
    }

    get area(){
        return this.sideArray[0]*this.sideArray[0]
    }
}