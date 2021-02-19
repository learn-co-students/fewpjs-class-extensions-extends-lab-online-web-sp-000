// Your code here
class Polygon {
    constructor(array) {
      this.array = array;
    }

    get countSides() {
       return this.array.length
    }

    get perimeter() {
        return this.array.reduce((a, b) => a + b);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let arr = this.array;
        let a = arr[0];
        let b = arr[1];
        let c = arr[2];
        if (this.countSides === 3) {
            if (a + b <= c || a + c <= b || b + c <= a) {
                return false
            }
            return true
        } 
            return false
        
    }
}

class Square extends Polygon {
    get isValid() {
        let arr = this.array;
        let a = arr[0]
        
        if (this.countSides === 4) {
           return arr.every(side => side === a) ? true : false
        } 
            return false
        
    }

    get area() {
        return this.array[0] ** 2
    }
}