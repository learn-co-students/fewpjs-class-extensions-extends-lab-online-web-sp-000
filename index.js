class Polygon{
  constructor(array){
    this.sideA = array[0];
    this.sideB = array[1];
    this.sideC = array[2];
    this.sideD = array[3];
    this.sideCount = array.length;
    this.sides = array;
  }
  
  get countSides(){
    return this.sideCount;
  }
  
  get perimeter(){
    return this.sides.reduce((accum, value) => accum + value);
  }
  
}

class Triangle extends Polygon {
  
  
  
  get isValid(){
    let a = ((this.sideB + this.sideC) > this.sideA);
    let b = ((this.sideA + this.sideC) > this.sideB);
    let c = ((this.sideA + this.sideB) > this.sideC);
    if (this.sideCount === 3){
      return (a === true && b === true && c === true)
    }
  }
    
}

class Square extends Polygon {
  
  get isValid(){
    return (this.sides.reduce((acc, val) => acc + val)/4) === this.sideA
  }
  
  get area(){
    return this.sideA**2;
  }
}