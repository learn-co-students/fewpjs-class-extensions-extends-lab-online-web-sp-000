class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let sum = this.sides.reduce((p, c)=>{
          return p + c
        }, 0)
        // console.log(sum)
        return sum
    }
}

class Triangle extends Polygon {
    get isValid(){
        // console.log(this.countSides)
        if(this.countSides === 3)
           { if( this.sides[0] + this.sides[1] > this.sides[2] &&
                this.sides[1] + this.sides[2] > this.sides[0] &&
                this.sides[2] + this.sides[0] > this.sides[1] )
            {   return true;
            } else {
                return false; }
           } else {
            return false;
        }
    }
}

class Square extends Polygon {
    // get isValid(){
    //   if(this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3])
    //     { return true;
    //   } else {
    //     return false;
    //   }   
    // }

    get isValid(){
        let distinctSide = [...new Set(this.sides)];
        if(distinctSide.length === 1)
          { return true
        } else {
          return false
        }
    }

    get area(){
        return this.sides[0] * this.sides[1]
    }
}