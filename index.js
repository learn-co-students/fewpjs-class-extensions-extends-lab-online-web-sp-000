// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides;
  }

  get countSides(){
    return this.sides.length;
  }

  get perimeter(){
    return this.sides.reduce((memo, el) => memo + el, 0);
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.countSides === 3){
      if ((this.sides[0] + this.sides[1]) > this.sides[2] &&
          (this.sides[1] + this.sides[2]) > this.sides[0] &&
          (this.sides[2] + this.sides[0]) > this.sides[1]) {
        return true;
      }
    }
    return false;
  }
}

class Square extends Polygon {
  get isValid(){
    if (this.countSides === 4){
      if (this.sides[0] === this.sides[1] &&
          this.sides[0] === this.sides[2] &&
          this.sides[0] === this.sides[3]){
        return true;
      }
    }
    return false;
  }

  get area(){
    return this.sides[0] **2;
  }
}