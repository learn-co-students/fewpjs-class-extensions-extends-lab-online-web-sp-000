// Your code here
class Polygon{
    constructor(sidesArr){
        this.sidesArr = sidesArr
    }

    get countSides(){
        return this.sidesArr.length
    }

    get perimeter(){
        return this.sidesArr.reduce((total, el) => total + el, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.countSides != 3){
            return false
        }
        else{
            if (this.sidesArr[0] + this.sidesArr[1] < this.sidesArr[2] ||
                this.sidesArr[0] + this.sidesArr[2] < this.sidesArr[1] ||
                this.sidesArr[2] + this.sidesArr[1] < this.sidesArr[0]){
                    return false
                }
            else{
                return true
            }
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.countSides != 4){
            return false
        }
        else{
            if (this.sidesArr[0] != this.sidesArr[1] ||
                this.sidesArr[1] != this.sidesArr[2] ||
                this.sidesArr[2] != this.sidesArr[3] ||
                this.sidesArr[3] != this.sidesArr[0])
                {
                    return false
                }
            else{
                return true
            }
        }
    }

    get area(){
        return this.sidesArr[0] * this.sidesArr[1]
    }
}