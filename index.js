// Your code here
class Polygon{
 constructor(array){
   this.array = array
 } 
 
 get countSides() {
   return this.array.length
 }
 get perimeter() {
   
   return this.array.reduce((total, element) => total + element)
 }
}

class Triangle extends Polygon{
  get isValid(){
    const array = this.array;
    const firstSideValid = array[0] + array[1] > array[2]
    const secondSideValid = array[0] + array[2] > array[1]
    const thirdSideValid = array[1] + array[2] > array[0]

    return firstSideValid && secondSideValid && thirdSideValid;
  }
}

class Square extends Polygon {
  
  get isValid(){
    if(this.countSides === 4){
      return (this.array[0] === this.array[1]) && (this.array[2] === this.array[3])
    }
  }
  
  get area() {
    if(this.countSides === 4) {
      return this.array[0] * this.array[1]
    }
  }
}