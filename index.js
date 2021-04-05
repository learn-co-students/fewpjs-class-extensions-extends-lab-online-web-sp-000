// Your code here
class Geo {
    constructor(arr){
        this.arr = arr
     }

     get countSides(){
        return this.arr.length
      }

      get perimeter(){
        return  this.arr.reduce(function(acc,currentV){
          return acc + currentV
        },0)
        
    }

}

class Polygon extends Geo {

}

class Triangle extends Geo {

    get isValid(){
        const a = this.arr[0]
        const b = this.arr[1]
        const c = this.arr[2]
        if (a + b <= c || a + c <= b || b + c <= a){
           return false
        } else {
           return true
        }
    }

}


class Square extends Geo {

    get area(){
        return this.arr[0] * this.arr[1]
    }

 
    get isValid(){
      let a = this.arr[0]
      let b = this.arr[1]
      let c = this.arr[2]
      let d = this.arr[3]
      if(a === b && a === c && a === d && b === c && b === d && c === d){
            return true
        } else {
            return false
        }
    }
}


