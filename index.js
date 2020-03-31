// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
        // for (let i = 0; i < arr.length; i++) {
        //     this.side
        // }
    }

    get perimeter() {
       return this.sides.reduce(( accumulator, currentValue ) => accumulator + currentValue,
        0)
    }

    get countSides() {
        return this.sides.length
    }
}

class Triangle extends Polygon {
    get isValid() {
        console.log(this.sides)
        
        if (this.sides.length === 3) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]

           return ((a + b > c) && (c + b > a) && (a + c > b)) ? true : false
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        console.log(this.sides)
        
        if (this.sides.length === 4) {
            const allEqual = arr => arr.every( v => v === arr[0] )
            return allEqual(this.sides)
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}