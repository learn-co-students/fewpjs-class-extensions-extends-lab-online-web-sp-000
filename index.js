class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray;
    }

    get countSides() {
        return this.sidesArray.length;
    }

    get perimeter() {
        
        return this.sidesArray.reduce((total, side) => {return total + side}, 0);
        
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides == 3) {
            let [a, b, c] = this.sidesArray
            if ((a + b > c) && (a + c > b) && (b + c > a)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides == 4)  {
             let [a, b, c, d] = this.sidesArray
            if ((a == b) && (b == c) && (c == d)) {
                return true;
            }
            else {
            return false;
            }
        }
        else {
            return false;
        }
    }
    

    get area() {
        return this.sidesArray[0] ** 2
    }
}