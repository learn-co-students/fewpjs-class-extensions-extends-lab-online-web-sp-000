class Polygon {
    constructor(numbers) {
        this.numbers = numbers
    }
    get countSides() {
        return this.numbers.length;
    }
    get perimeter() {
        let result = 0;
        for (var i = 0; i < this.numbers.length; i++) {
            result += this.numbers[i]
        }
        return result;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.numbers[0] + this.numbers[1] > this.numbers[2]) && (this.numbers[1] + this.numbers[2] > this.numbers[0]) && (this.numbers[2] + this.numbers[0] > this.numbers[1])) {
            return true
        } 
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        if ((this.numbers[0] === this.numbers[1]) && (this.numbers[1] === this.numbers[2]) && (this.numbers[2] === this.numbers[3])) {
            return true
        }
        return false
    }
    get area() {
        return this.numbers[0] * this.numbers[0]
    }
}