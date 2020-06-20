// Your code here
class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray
    }

    get countSides() {
        return this.sidesArray.length;
    }

    get perimeter() {
        return this.sidesArray.reduce(
            (total, e) => 
                { return total = total + e },
                0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if ((this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2]) && 
            (this.sidesArray[1] + this.sidesArray[2]) > this.sidesArray[0]) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sidesArray.every((currentValue, index, collection) => {
            return currentValue === collection[0];
        })) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sidesArray[0] ** 2;
    }

}