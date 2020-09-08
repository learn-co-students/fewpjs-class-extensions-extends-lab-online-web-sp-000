class Polygon{
  constructor(array){
    this.array = array;
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter(){
    return this.array.reduce((s,n)=>s+n, 0);
  }
}

class Triangle extends Polygon{
  get isValid(){
    const a = this.array;
    return !(a[0]+a[1]<a[2]||a[1]+a[2]<a[0]||a[2]+a[0]<a[1])
  }
}

class Square extends Polygon{
  get area(){
    return this.array[0] ** 2;
  }
  get isValid(){
    const a = this.array;
    for(let i=1; i<a.length; i++)
      if(a[i-1]!=a[i])
        return false;
    return true;
  }
}
// console.log(new Triangle([ 15, 10, 1 ]).isValid());
