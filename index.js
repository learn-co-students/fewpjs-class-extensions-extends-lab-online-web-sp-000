class Polygon {
    constructor(arr) {
        this.arr = arr
    }
    get countSides() {
        return this.arr.length
    }
    get perimeter() {
        return this.arr.reduce((acc, num) => acc + num)
    }
}
class Triangle extends Polygon {
    get isValid() {
        if (this.arr[0] + this.arr[1] > this.arr[2]) {
            if (this.arr[1] + this.arr[2] > this.arr[0]) {
                if (this.arr[0] + this.arr[2] > this.arr[1]) {
                    return true
                } else { return false }
            } else { return false }
        } else { return false }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.arr[0] === this.arr[1] && this.arr[1] === this.arr[2] && 
            this.arr[2] === this.arr[3] && this.arr[0] === this.arr[3]) {
                return true
            } else { return false }
    }
    get area() {
        return this.arr[0] * this.arr[1]
    }
}