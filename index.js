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
    if (this.countSides === 3){
      if (this.sides[0] + this.sides[1] > this.sides[2]){
        return false;
      } else if (this.sides[1] + this.sides[2] > this.sides[0]){
        return false;
      } else if (this.sides[2] + this.sides[0] > this.sides[1]){
        return false;
      }
      return true;
    }
  }
}
class Square extends Polygon{}