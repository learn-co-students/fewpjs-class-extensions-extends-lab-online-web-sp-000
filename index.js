class Polygon {

    constructor(array) {
        this.intArray = array
    }

    get countSides() {
        return this.intArray.length
    }

    get perimeter() {
        return this.intArray.reduce((memo, num) => memo + num, 0)
    }
}

class Triangle extends Polygon {

    get isValid(){
        
        let [a, b, c] = this.intArray

        if (a + b > c &&  b + c > a && a + c > b) {
            return true
        }
        return false
    }
}

class Square extends Polygon {
 

    get isValid(){ 

        let [a, b, c, d] = this.intArray

        if (a == b && a == c && a == d && b == c && b == d && c == d) {
            return true
        }
        return false
    }

    get area(){
        
        if (this.isValid) {
            let [a, b] = this.intArray
            return a * b
        }
        return "This is not a valid square"        
    }
}