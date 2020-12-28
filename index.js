class Polygon {
    constructor (arr) {
        this.sides = arr;
    }

    get countSides () {
        return this.sides.length;
    }

    get perimeter () {
        return this.sides.reduce((acc, cv) => acc + cv);
    }

}

class Triangle extends Polygon {
    get isValid () {
        let s1 = this.sides[0];
        let s2 = this.sides[1];
        let s3 = this.sides[2];

        if (s1 + s2 > s3 && s2 + s3 > s1 && s1 + s3 > s2) {
            return true;
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid () {
        let side = this.sides[0]
        if (this.sides.every((e) => e == side)) {
            return true
        }
        return false;
    }

    get area () {
        return this.sides[0] ** 2;
    }
}