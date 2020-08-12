// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let count = 0;
        for (const side of this.sides) {
            count += side;
        }
        return count;
    } 
}

class Triangle extends Polygon {
    get isValid() {
        let valid = true;
        for (const side of this.sides) {
            let total = this.sides.reduce((a,b) => a+b, 0);
            if (!((total - side) >= side)) {
                valid = false;
                break;
            }
        }
        return valid;
    }
}

class Square extends Polygon {
    get isValid() {
        const s1 = this.sides[0]
        if (s1 === this.sides[1] && s1 === this.sides[2] && s1 === this.sides[3]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] * this.sides[0];
    }
}