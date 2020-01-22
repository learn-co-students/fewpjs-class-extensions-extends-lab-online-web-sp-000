// Your code here

class Polygon {
    constructor(sides) {
        this._sides = sides;
        for (let i = 0; i < sides.length; i++) {
            this['side' + [i + 1]] = sides[i]
        }
    }

    get countSides() {
        return this._sides.length;
    }

    get perimeter() {
        return this._sides.reduce( (acc, curVal) => acc + curVal )
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        return (this.side1 + this.side2 < this.side3 || 
            this.side2 + this.side3 < this.side1 || 
            this.side1 + this.side3 < this.side2) ? false : true;
    }
}

class Square extends Polygon {

    get isValid() {
        return (this.side1 !== this.side2 || 
            this.side1 !== this.side3 || 
            this.side1 !== this.side4) ? false : true;
    }

    get area() {
        return this.side1 * this.side2;
    }
}