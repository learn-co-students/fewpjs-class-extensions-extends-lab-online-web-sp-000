class Polygon {
    constructor(integers) {
        this.integers = integers
    }

    get countSides() {
        return this.integers.length
    };

    get perimeter() {
        return this.integers.reduce( (a,b) => a + b, 0);
    };
}

class Triangle extends Polygon {
    get isValid() {
        if(this.integers.length === 3) {
            if(this.integers[0] + this.integers[1] > this.integers[2] && this.integers[1] + this.integers[2] > this.integers[0] && this.integers[0] + this.integers[2] > this.integers[1]) {
                return true
            } else {
                return false
            }
        } else {
            return 'not a triangle'
        }
    };
}

class Square extends Polygon {
    get isValid() {
        if (this.integers.length === 4) {
            if (this.integers[0] && this.integers[1] && this.integers[2] === this.integers[3]) {
                return true
            } else {
                return false
            }
        } else {
            return 'this is not a square'
        }
    };

    get area() {
        let num = this.integers[0]
        return num**2
    }
}