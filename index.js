// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let total = 0;
        this.sides.forEach(x => total += x);
        return total;
    }

}

class Triangle extends Polygon {
    // isValid(){
    //     if (this.countSides == 3) {
    //         return true;
    //     }
    //     return false;
    // }
    get isValid(){
        if (this.countSides == 3) {
            let a = this.sides[0];
            let b = this.sides[1];
            let c = this.sides[2];

            // for (let i = 0; i < this.countSides; i++) {
                // if (s != this.sides[i]) { return false; }
            // }
            if ((a+b > c) && (a+c > b) && (b+c > a)){ return true; }

            return false;
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.countSides == 4) {
            let s = this.sides[0];
            for (let i = 0; i < this.countSides; i++) {
                if (s != this.sides[i]) { return false; }
            }
            return true;
        }
        return false;
    }

    get area() {
        return this.sides[0] ** 2;
    }
}