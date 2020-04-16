// Your code here
class Polygon {
    constructor(sideArray){
        this.sides = sideArray;
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((t,i) => t+i)
    }
    hasNSides(n){
        return this.countSides === n
    }
}

class Triangle extends Polygon {
    get isValid(){
        let triangleEquivilance = () => {
            let testSides = [...this.sides];
            for(let i = 0; i < this.countSides; i++){
                let testSide = testSides.shift()
                if(testSide > testSides.reduce((t,i) => t+i)) return false
                testSides.push(testSide)
            }
            return true
        }
        return (this.hasNSides(3) && triangleEquivilance())
    }
}

class Square extends Polygon {
    get isValid(){
        let allSidesEqual = () => {
            const side1 = this.sides[0];
            const initialized = true;
            return this.sides.reduce((t, i, initialized) => t && i == side1)
        }
    return (this.hasNSides(4) && allSidesEqual())
    }

    get area(){
        if(this.isValid){
            return (this.sides[0]**2)
        }
    }
}