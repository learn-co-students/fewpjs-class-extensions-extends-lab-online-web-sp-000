// Your code here
class Polygon{
  constructor(sideArray){
     this._side = sideArray;
  }

  get countSides(){
    return this._side.length
    }
  get perimeter(){
    return this._side.reduce((a,b) => a + b)
  }
}

class Triangle extends Polygon {
  get isValid(){
    if (this._side[0] + this._side[1] <= this._side[2] ||
        this._side[1] + this._side[2] <= this._side[0] ||
        this._side[0] + this._side[2] <= this._side[1]){
        return false
        } else {
        return true
        }
  }
}

class Square extends Polygon {
  get isValid(){
    if (this._side.length == 4 && this._side[0] == this._side[1] && this._side[1] == this._side[2] && this._side[2] == this._side[3]){
      return true
    } else {
      return false
    }
  }
get area(){
  return this._side[0] * this._side[0]
}

}
