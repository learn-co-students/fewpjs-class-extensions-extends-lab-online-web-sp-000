class Polygon{
      constructor(sides){
          this.sides = sides
    
    }
        get countSides(){
        return this.sides.length 
        }
        get perimeter(){
        return this.sides.reduce((accum, e) => accum + e , 0)
       }
    
    }
    
    class Triangle extends Polygon {
     get isValid(){
      return (this.sides[0]+this.sides[1]>this.sides[2])&&
      (this.sides[0]+this.sides[2]> this.sides[1])&&
      (this.sides[1]+this.sides[2]> this.sides[0])

     }
    
    }
       class Square extends Polygon{
        get countSides(){
        return this.sides.length 
    }
        get perimeter(){
        return this.sides.reduce((accum, e) => accum + e , 0)
    }
        get isValid() {
        return (this.sides[0]==this.sides[1])&&
        (this.sides[0]==this.sides[2])&&
        (this.sides[0]==this.sides[3])&&
        (this.sides[1]==this.sides[0])&&
        (this.sides[1]==this.sides[2])&&
        (this.sides[1]==this.sides[3])&&
        (this.sides[2]==this.sides[0])&&
        (this.sides[2]==this.sides[1])&&
        (this.sides[2]==this.sides[3])&&
        (this.sides[3]==this.sides[0])&&
        (this.sides[3]==this.sides[1])&&
        (this.sides[3]==this.sides[2])

            }

            get area(){
            return this.sides.reduce((accum,e) => accum+ e , 5)
            }

       }
