// Your code here

class Polygon {

    constructor(arrayOfIntegers) {
        this.arrayOfIntegers = arrayOfIntegers;
    }

    get countSides() {
        return this.arrayOfIntegers.length;
    }

    get perimeter() {
        // sums the elements of an array of integers
        return this.arrayOfIntegers.reduce((x, y) => x + y, 0);


        // for (let i=0; i < this.arrayOfIntegers.length; i++) {
        //     return
        // }
    }
}

/*
The sum of the lengths of any two sides of a triangle
is greater than the length of the third side.

If you take the three sides of a triangle and add them in pairs,
the sum is greater than (not equal to) the third side.

If that is not true,
then it is not possible to construct a triangle
with the given side lengths.
*/

class Triangle extends Polygon {
    get isValid() {

        // let sideA = this.arrayOfIntegers[0];
        // let sideB = this.arrayOfIntegers[1];
        // let sideC = this.arrayOfIntegers[2];
        //
        // if (this.countSides() === 3) {
        //     if (sideA + sideB < sideC) {
        //         return false;
        //     } else if (sideB + sideC < sideA) {
        //         return false;
        //     } else if (sideC + sideA < sideB) {
        //         return false;
        //     }
        // } else {
        //     return "Triangle is Not Valid";
        // }
        //
        // return true;

        let sideA = this.arrayOfIntegers[0];
        let sideB = this.arrayOfIntegers[1];
        let sideC = this.arrayOfIntegers[2];

        return ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))
    }
}

class Square extends Polygon {
    get isValid() {
        let sideA = this.arrayOfIntegers[0];
        let sideB = this.arrayOfIntegers[1];
        let sideC = this.arrayOfIntegers[2];
        let sideD = this.arrayOfIntegers[3];

        return ((sideA === sideB) && (sideA === sideC) && (sideA === sideD))
    }

    get area() {
        return this.arrayOfIntegers[0] * this.arrayOfIntegers[0];
    }
}
