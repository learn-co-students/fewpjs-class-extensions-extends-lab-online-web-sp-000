// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, side) =>{
            return acc += side
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
       let a = this.sides[0]
       let b = this.sides[1]
       let c = this.sides[2]
        return Boolean(a + b > c && a + c > b && b + c > a) 
    }
}

class Square extends Polygon {
   get area() {
    let a = this.sides[0]
    let b = this.sides[1]
    return a * b
   }

   get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]
    let d = this.sides[3]
    return Boolean(a === b && a === c && a === d)

   }
}
