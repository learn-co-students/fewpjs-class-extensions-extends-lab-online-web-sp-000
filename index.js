// Your code here
class Polygon{
    constructor(array){
        this.sides = []
        for(let i=0; i < array.length; i++){
            this.sides[i] = array[i];
        }
    }
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((a,b) => a + b)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if ((this.sides[0] + this.sides[1]) > (this.sides[2]) && (this.sides[2] + this.sides[1]) > (this.sides[0]) && (this.sides[0] + this.sides[2]) > (this.sides[1])){
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get area(){
        return this.sides[0] * this.sides[1]
    }
    get isValid(){
        if (this.sides[0] === this.sides[1] &&  this.sides[2] === this.sides[3] && this.sides[3] === this.sides[0]){
            return true
        }else{
            return false
        }
    }
}