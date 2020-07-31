class Polygon {
    constructor(arrNum){
        this.arrNum = arrNum;
    }
    get countSides(){ return this.arrNum.length; }
    get perimeter() { return this.arrNum.reduce((acc, element) => element + acc); }
    _valid_sides(sides) { return ((Array.isArray(this.arrNum)) && (this.countSides === sides))

    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!this._valid_sides(3)) return false;
        const [a, b, c] = this.arrNum;
        return ((a + b > c) && (a + c > b) && (b + c > a));
    }    
}

class Square extends Polygon {
    get isValid() {
      if (!this._valid_sides(4)) return false;
      const [a, b, c, d] = this.arrNum;
      return ((a === b) && (b === c) && (b === d));
    }
  
    get area() {
      if (!this._valid_sides(4)) return false;
      return this.arrNum[0]** 2;
    }
  }