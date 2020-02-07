// Your code here

class Polygon{
  constructor(array){
    for (let i = 0; i < array.length; i++){
      this.sides = array;
      //this.side[i] = array[i];
    }
  }
  
  get countSides(){
    return this.sides.length;
  }
  
  get perimeter(){
    return this.sides.reduce((mem, acc) => mem + acc);
  }
}

class Triangle extends Polygon{
  get isValid(){
    
    if (!(Array.isArray(this.sides))) return;
    if (this.countSides !== 3) return;
    
    if ((this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0] && (this.sides[2] + this.sides[0]) > this.sides[1])
      return true;
      
      return false;
    
  }
}
class Square extends Polygon{
  get area(){
    return this.sides[0] * this.sides[0];
  }
  
  get isValid(){
    
    if (!(Array.isArray(this.sides))) return;
    if (this.countSides !== 4) return;
    
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3])
      return true;
      
      return false;
    
  }
}