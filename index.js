class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        let sum = 0
        let numbers = this.array

        for(let i = 0; i < numbers.length; i++){
            sum += numbers[i]
        }

        return sum
    }
}

class Triangle extends Polygon{

    get isValid(){
        let triangle = this.array
        
        if(triangle[0] + triangle[1] > triangle[2] && triangle[1] + triangle[2] > triangle[0] && triangle[0] + triangle[2] > triangle[1] && triangle.length === 3 ){
            return true
        }else{
            return false
        }
    }


}

class Square extends Polygon{

    get isValid(){
        let square = this.array

        if(square[0] === square[1] && square[1] === square[2] && square[2] === square[3]){
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.array[0] ** 2
    }
}