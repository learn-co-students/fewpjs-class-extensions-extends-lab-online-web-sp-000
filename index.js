// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides; 
    }

    get countSides() {
        return this.sides.length; 
    }

    get perimeter() {
        let perimeter = 0; 
        for (let i = 0; i < this.sides.length; i++) {
            perimeter += this.sides[i]; 
        }
        return perimeter; 
    }
}

class Triangle extends Polygon {
    get isValid() {
        const a = this.sides[0];
        const b = this.sides[1]; 
        const c = this.sides[2]; 

        if ((a + b > c) && (a + c) > b && (b + c) > a) {
            return true; 
        }
        return false; 
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides[0] == this.sides[1] && this.sides[2] == this.sides[3] && this.sides[0] == this.sides[2]) {
            return true; 
        }
        return false; 
    }

    get area() {
        return this.sides[0] * this.sides[0]; 
    }
}
