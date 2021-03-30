// Your code here
class Polygon {
    constructor (array) {
        this.sides = array;
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((total, side) => total + side)
    }
}
class Triangle extends Polygon{
    get isValid() {
        //console.log(this.sides)
        //console.log(this.perimeter)
        //this.sides.forEach(side => console.log(2*side))
        return (this.countSides === 3) && (this.sides.every(side => this.perimeter-side > side))
    }
}
class Square extends Polygon{
    get isValid() {
        return (this.countSides === 4) && (this.sides.every(side => side === this.sides[0]))
    }
    get area() {
        return this.sides[0]**2
    }
}