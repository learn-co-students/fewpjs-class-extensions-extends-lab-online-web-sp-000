// Your code here

class Polygon{
  constructor(array){
    this.array = array;
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter(){
    return this.array.reduce((total, element) => element + total);
  }
  
}

class Triangle extends Polygon{
  get isValid(){
    let a = this.array[0];
    let b = this.array[1];
    let c = this.array[2];

    return a + b > c && a + c > b && b + c > a;
  }   
}

class Square extends Polygon{
  get isValid(){
    return this.array.every((val, i, arr) => val === arr[0]);
  }

  get area(){
    return this.array[0] ** 2;
  }
  
}