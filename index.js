class Polygon {
    constructor(arr) {
        this.sides = arr
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((t, e) => e + t)
    }
}

class Triangle extends Polygon {

    get isValid() {
        let [a, b, c] = this.sides
        return !(a + b <= c || a + c <= b || b + c <= a);
    }
}

class Square extends Polygon {

    get area() {
        let [a, b] = this.sides
        return a * b
    }

    get isValid() {
        let [a, b, c, d] = this.sides
        return (a === b && b === c && c === d)
    }
}