// Your code here
class Polygon {
    constructor(arr) {
        this.sides = arr
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((a,e) => a + e)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a,b,c;
        [a,b,c] = this.sides
        return (a + b > c && b + c > a)
    }
}
class Square extends Polygon {
    get isValid() {
        return this.countSides === 4 ? (this.perimeter === (this.sides[0]*4)) : false;
    }
    get area() {
        return this.sides[0] ** 2
    }
}