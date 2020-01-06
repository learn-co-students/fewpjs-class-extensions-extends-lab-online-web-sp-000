// Your code here

class Polygon{

    constructor(sides){
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        if (!Array.isArray(this.sides)) return;
        let sum = 0;
        for (var int of this.sides) {
          sum += int
        }
        return sum
      }
    }

}


class Tirangle extends Polygon{

}

class Square extends Polygon{

}


