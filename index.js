class Polygon {
    constructor(intArray) {
      this.intArray = intArray;
    }

    get countSides() {
        return this.intArray.length
    }
   
    get perimeter() {
        let perimeter = this.intArray.reduce((acc, val) => acc + val, 0)
        return perimeter
    }    
}

class Triangle extends Polygon {
    get isValid() {
        if (this.intArray.length === 3) {
            let [a,b,c] = this.intArray
            if ((a + b > c) && (b + c > a) && (a + c > b)) {
                return true
            }  
        }
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.intArray.length === 4) {
            if (this.intArray.every((val, i, arr) => val === arr[0])) {
                return true
            }
        }
        return false
    }

    get area() {
        return this.intArray[0] ** 2
    }
}
