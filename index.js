class Polygon {
	constructor(array){
		this.sides = array
	}

	get countSides(){
		return this.sides.length
	}

	get perimeter(){
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return this.sides.reduce(reducer)
	}
}

class Triangle extends Polygon {
	get isValid(){
	    let side1 = this.sides[0]
	    let side2 = this.sides[1]
	    let side3 = this.sides[2]
	    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
	}
}

class Square extends Polygon {
	get isValid(){
		let oneSide = this.sides[0]
		return this.sides.every(s => s === oneSide)
	}

	get area(){
		return this.sides[0] ** 2
	}

}