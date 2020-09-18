class Polygon {
    constructor(sideArr) {
      this.sideArr = sideArr;
    }
   
    get countSides() {
      return this.sideArr.length;
    }

    get perimeter() {
        return this.sideArr.reduce((a, b) => a + b, 0);
    }    
  }

  class Triangle extends Polygon  {
    get isValid() {
        if (this.countSides === 3) {
            if (
                ( (this.sideArr[0] + this.sideArr[1]) > this.sideArr[2] ) &&
                ( (this.sideArr[1] + this.sideArr[2]) > this.sideArr[0] ) &&         
                ( (this.sideArr[2] + this.sideArr[0]) > this.sideArr[1]) 
               ) {
                      return true
                  }       
            else {
                return false
            }                
        }
        else {
            return false
        }
      }
  }

  class Square extends Polygon  {
    get isValid() {
        if (this.countSides === 4) {
            //debugger;
            return this.sideArr.every( (val, i, arr) => val === arr[0] )
        }
        else {
            return false
        }
    }
    get area() {
        return this.sideArr[0]**2
    }
  }