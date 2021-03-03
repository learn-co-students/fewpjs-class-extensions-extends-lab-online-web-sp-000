class Polygon {
  constructor(arr) {
    let i = 1;
    for (let s of arr) {
      this.side`${i}` = s
      i++;
    }
  }

  get countSides() {
    return arr.length;
  }

  get perimeter() {
    return arr.reduce(total, curr => total + curr )
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      
        return true;
    }
    return false;
  }
}