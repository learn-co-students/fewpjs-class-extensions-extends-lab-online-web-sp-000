// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
    return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((a,b) => a + b, 0)
    }

}

class Triangle extends Polygon {
    //constructor(sides){
      //  super(sides);
    //}
    get isValid(){
        //console.log(this.sides )
        if( this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]){
            return true
        }else{
            return false
        }

    }

}

class Square extends Polygon {
    // constructor(sides){
    //     super(sides);
    // }

    get isValid(){
        console.log(this.sides)
        if(this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3] && this.sides[3] === this.sides[0]){
            return true;
        }else{
            return false;
        }
        // for(let i = 1; i < this.sides; i++){
        //     if(this.sides[0] !== this.sides[i]){
        //         return false;
        //     }
        //     return true
        // }
        // //return true
    }

    get area(){
        return this.sides[0] * this.sides[1]
    }

}