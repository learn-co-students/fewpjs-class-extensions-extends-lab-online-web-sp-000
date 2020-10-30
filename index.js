// Your code here
class Polygon {
  constructor(dims) {
    this.dims = dims;
    this.count = this.dims.length;
  }
 
  get countSides() {
      return this.count
  }

  get perimeter() {
    return this.dims.reduce((acc, val) => {return acc + val;})
  }
}

class Triangle extends Polygon {
  get isValid() {
    let testSet = new Set([...this.dims]) 
    return (testSet.size === 1)
  }
}

class Square extends Triangle {
  get area() {
    return (Math.pow(this.dims[0],2))
  }
}

 
// class Dog extends Pet {
//   // inherits constructor from Pet
// }
 
// class Cat extends Pet {
//   // inherits constructor from Pet
// }
 
// class Bird extends Pet  {
//   // inherits constructor from Pet
//   fly() {
//     return `${this.name} flies away!`
//   }

    polygon = new Polygon( [ 5, 5, 5 ] )

console.log(polygon.perimeter)
