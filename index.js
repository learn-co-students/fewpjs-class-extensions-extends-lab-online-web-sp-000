// Your code here

class Polygon { 
    constructor(sides){ 
        this.sides = sides 
        this.count = this.sides.length
    }

    get countSides () {
        return this.count
    }

    get perimeter () { 
        return this.sides.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue
        }, 0)
    }
}

class Triangle extends Polygon { 
    get isValid () {
        let [a, b, c] = this.sides;
        return a + b > c && b + c > a && c + a > b; 
    }
}

class Square extends Polygon {
    get isValid () { 
        let [a, b, c, d] = this.sides; 
        return ((a === b) && (a === c) && (a === d))
    }

    get area () { 
        return this.sides[0] ** 2
    }
}