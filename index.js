// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((a,b)=>a+b)
  }
}

class Triangle extends Polygon{

  get isValid(){
    let sides = this.sides
    return sides[0]+sides[1]>sides[2] && sides[1]+sides[2]>sides[0] && sides[0]+sides[2]>sides[1]? true : false
  }
}

class Square extends Polygon{

    get area(){
      let sides = this.sides
      return sides[0]**2
    }

    get isValid(){
      let sides = this.sides
      return sides[0]===sides[1] && sides[1]===sides[2] && sides[2]===sides[3]? true : false

    }

}
