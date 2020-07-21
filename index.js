class Polygon {

    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        let total = 0
        for(let i = 0; i < this.array.length; i++){
            total+=this.array[i]
        }
        return total
    }

}


class Triangle extends Polygon {

    get isValid(){
        if(this.array.length === 3){
            let side1 = this.array[0]
            let side2 = this.array[1]
            let side3 = this.array[2]
            if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}



class Square extends Polygon {

    get isValid(){
        let test = this.array[0]
        return this.array.every(e => test === e)
    }

    get area(){
        return this.array[0] ** 2
    }
}