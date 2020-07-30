// Your code here
class Polygon {
    constructor(intgArray) {
        this.arrayName = intgArray || [];
    }

    get countSides() {
        return this.arrayName.length
    }

    get perimeter() {
        let total = 0
        for (let num of this.arrayName) {
            total += parseInt(num)
        }
        return total
    }
}

class Triangle extends Polygon {
    get isValid() {
        let intArray = this.arrayName
        if (this.countSides !== 3 || !Array.isArray(intArray)) {
            return false
        } else {
            let sideA = parseInt(intArray[0])
            let sideB = parseInt(intArray[1])
            let sideC = parseInt(intArray[2])
            if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
                return true
            } else {
                return false
            }
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides === 4) {

            let newArr = this.arrayName.filter(num => parseInt(num) === parseInt(this.arrayName[0]))
            
            return newArr.length === 4

        }
        else {
            return false
        }
    }

    get area() {
        return parseInt(this.arrayName[0]) * parseInt(this.arrayName[1])
    }
}