class Polygon{

    constructor(intArray){
        this.sideLengths = intArray
    }

    get countSides(){
        return this.sideLengths.length
    }

    get perimeter(){
        return this.sideLengths.reduce( (sum, length) => { return sum + length }, 0);
    }
}

class Triangle extends Polygon{

    get isValid(){
        
        const lengthsAreValid = () => {
            
            const reducer = (valid, length) => {
                return valid === true && (this.perimeter - length) > length
            }
            
            return this.sideLengths.reduce(reducer, true)            
        }
        
        return this.countSides === 3 && lengthsAreValid()
    }
}

class Square extends Polygon{

    get isValid(){

        const firstSide = this.sideLengths[0]
        
        return this.sideLengths.slice(1).reduce( (valid, length) => {
            return valid === true && length === firstSide
        }, true)
    }

    get area(){
        return Math.pow(this.sideLengths[0], 2)
    }
}