class Polygon {
    constructor(sidesArray){
        this.sidesArray = sidesArray;
        this.sA = sidesArray[0];
        this.sB = sidesArray[1];
        this.sC = sidesArray[2];
    }

    get countSides(){
        return this.sidesArray.length;
    }

    get perimeter(){
        return this.sidesArray.reduce(function (total, side){
            return total + side;
        })
    }

}

class Triangle extends Polygon {
    get isValid(){
        if (this.sA + this.sB > this.sC && this.sB + this.sC > this.sA && this.sA + this.sC > this.sB){
            return true;
        } else {
            return false;
        }
    }

}

class Square extends Polygon{

    get area(){
        console.log(this.sidesArray)
        return this.sidesArray[0] * this.sidesArray[1];
    }

    get isValid(){
        if ((this.sA == this.sB) && (this.sB == this.sC) && (this.sA == this.sC)){
            return true;
        } else {
            return false;
        }
    }

}