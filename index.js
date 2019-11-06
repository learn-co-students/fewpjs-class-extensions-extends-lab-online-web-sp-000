// Your code here
class Polygon{
    constructor(sides){
       this.sides = sides;
       
    }

    get countSides(){
    return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce((a, b ) => a + b, 0);
    }


}

class Triangle extends Polygon{

    get isValid(){
        let sideA = this.sides[0]
        let sideB = this.sides[1]
        let sideC = this.sides[2]
        if(this.countSides === 3){
        
            if ((sideA + sideB) > sideC && (sideC + sideA) > sideB && (sideB + sideC) > sideA){
                return true;
            
            }
        }
        return false;
    }

}

class Square extends Polygon{
    
   
    get isValid(){
        let sideA = this.sides[0]
        let sideB = this.sides[1]
        let sideC = this.sides[2]
        let sideD = this.sides[3]
        if (this.countSides ===4){
            if(sideA === sideB && sideA === sideC && sideA === sideD){
                return true;
            }else{
                return false;
            }
        }
    }
    

    get area(){
        return this.sides[0] **2;
    }

}