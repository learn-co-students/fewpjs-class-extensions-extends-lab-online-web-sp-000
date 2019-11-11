// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {

        return this.sides.reduce((a, b) => a + b)
    }
}
class Triangle extends Polygon {
    get isValid() {

        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]

        if (a + b <= c || a + c <= b || b + c <= a)
            return false;
        else
            return true;

    }


}

class Square extends Polygon {

    get isValid() {
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        const d = this.sides[3]

        if (a == b && a == c && a == d &&
            c == d && b == c && b == d)
            return true;
        else
            return false;
    }

    get area() {
        const a = this.sides[0]
        const b = this.sides[1]

        return a * b;
    }

}




