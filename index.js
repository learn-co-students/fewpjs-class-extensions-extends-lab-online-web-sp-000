// Your code here
class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        function getSum(total, num) {
            return total + Math.round(num);
        }
        return this.sides.reduce(getSum, 0);
    }

}

class Triangle extends Polygon {
    get isValid() {
        const arr = this.sides
        if (arr.length == 3) {
            if ((arr[0] + arr[1]) <= arr[2] || (arr[1] + arr[2]) <= arr[0] || (arr[0] + arr[2]) <= arr[1]) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const arr = this.sides
        if (arr.length == 4) {
            if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3]) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    get area() {
        const arr = this.sides
        return arr[0] * arr[1]
    }

} 
