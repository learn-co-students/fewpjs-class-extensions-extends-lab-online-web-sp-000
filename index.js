// Your code here
class Polygon {
    constructor(side){
        this.side = side;
        this.count = this.side.length
    }

    get countSides(){
        return this.side.length;
    }

    get perimeter(){
        let result = 0
        for(var i = 0; i < this.side.length; i++){
            result += this.side[i];
        }
        return result;
    }
}

class Triangle extends Polygon {
    
    get isValid(){
        let side1 = this.side[0];
        let side2 = this.side[1];
        let side3 = this.side[2];
        if(!Array.isArray(this.side)) return;
        if(this.count !== 3)return;
        return ((side1 === side2) && (side1 === side3) && (side2 === side3))
    }
}

class Square extends Polygon {
    get isValid(){
        let side1 = this.side[0];
        let side2 = this.side[1];
        let side3 = this.side[2];
        let side4 = this.side[3];
        if(!Array.isArray(this.side)) return;
        if(this.count !== 4)return;
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area(){
        return this.side[0] * this.side[0];
    }
}

