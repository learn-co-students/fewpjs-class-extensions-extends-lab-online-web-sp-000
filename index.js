class Polygon {
  constructor(arr) {
    let i = 1;
    for (let s of arr) {
      this[`side${i}`] = s
      i++;
    }
  }

  get countSides() {
    return Object.keys(this).length;
  }

  get perimeter() {
    return Object.values(this).reduce((total, curr) => total + curr);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      if (Object.values(this)[0] + Object.values(this)[1] > Object.values(this)[2] && Object.values(this)[0] + Object.values(this)[2] > Object.values(this)[1] && Object.values(this)[2] + Object.values(this)[1] > Object.values(this)[0])
        return true;
    }
    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    if (Object.values(this)[0] === Object.values(this)[1] && Object.values(this)[2] === Object.values(this)[3] && Object.values(this)[0] === Object.values(this)[3]) {
      return true;
    }
    return false;
  }
  
  get area() {
    return Object.values(this)[0] ** 2
  }
}