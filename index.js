class Polygon {
    constructor(arr){
        this.arr = arr;
    }

    get countSides(){
        return this.arr.length
    }

    get perimeter(){
        return this.arr.reduce(function (total, num){
            return total + num
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        let a = this.arr[0];
        let b = this.arr[1];
        let c = this.arr[2];
        if ((a + b > c) && (b + c > a) && (c + a > b)){
            return true
        } else {
            return false
        }
    }
}
class Square extends Polygon {
    get isValid(){
        let a = this.arr[0];
        let b = this.arr[1];
        let c = this.arr[2];
        let d = this.arr[3];
        if ((a == b) && (a == c) && (a == d)){
            return true
        } else {
            return false
        }
    }
    get area() {
        let a = this.arr[0];
        return a * a;
    }

}