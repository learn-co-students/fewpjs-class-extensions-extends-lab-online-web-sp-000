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
		if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[2] + this.sides[1] > this.sides[0]){
			return true;
		}
		return false;
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