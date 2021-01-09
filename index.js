class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce( (total, element) => element + total, 0)
    }

    get triangle() {

    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let a = this.sides[0];
            let b = this.sides[1];
            let c = this.sides[2];

            if (a + b <= c || a + c <= b || b + c <= a) {
                return false;
            } else {
                return true;
            }

        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let a = this.sides[0];
            let b = this.sides[1];
            let c = this.sides[2];
            let d = this.sides[3];
            if (a === b && a === c && a === d) {
                return true;
            } else {
                return false;
            }

        } else {
            return false;
        }
    }

    get area() {
        if (this.countSides === 4) {
            let a = this.sides[0];
            let b = this.sides[1];
            let c = this.sides[2];
            let d = this.sides[3];
            let area = a * b
            return area
        } else {
            return false;
        }
    }

}
