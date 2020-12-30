
class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        let arr = this.array
        return arr.length;
    }

    get perimeter() {
        let arr = this.array;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return arr.reduce(reducer);
    }
}

class Triangle extends Polygon {

    get isValid() {
        let triangle = this;
        
        if(triangle.countSides === 3) {
            let arr = this.array
            if(arr[0] + arr[1] > arr[2] && arr[2] + arr[1] > arr[0] && arr[2] + arr[0] > arr[1]) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let square = this;

        if(square.countSides === 4) {
            let arr = this.array;
            if(arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]) {
                return true 
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }

    get area() {
        let square = this.array
        return square[0] ** 2
    }
}