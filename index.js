// Your code here
class Polygon {
	constructor (sides) {
		this.sides = sides
	}


	get countSides() {
		return this.sides.length
	}

	get perimeter() {
		let result = 0
		for (let i = 0; i < this.sides.length; i++) {
			result += this.sides[i]
		}
		return result
	}
}


class Triangle extends Polygon {
	get isValid() {
		if (this.sides.length !== 3) return false;

		let a = this.sides[0];
	    let b = this.sides[1];
	    let c = this.sides[2];
	    return a + b > c && b + c > a && a + c > b;
		
	}
}

class Square extends Polygon {
	get isValid() {
		let a = this.sides[0];
	    let b = this.sides[1];
	    let c = this.sides[2];
	    let d = this.sides[3];
	    
	    return a === b && a === c && a === d;
	}

	get area() {
		return this.sides[0] ** 2
	}
}