// Your code here
class Polygon{
  constructor(points){
    this.points = points;
  }

  get countSides(){
    return this.points.length;
  }

  get perimeter(){
    return this.points.reduce((sum, currentValue) => sum + currentValue, 0);
  }
}

class Triangle extends Polygon{
  get isValid(){
    const points = this.points;
    const firstSideValid = points[0] + points[1] > points[2]
    const secondSideValid = points[0] + points[2] > points[1]
    const thirdSideValid = points[1] + points[2] > points[0]

    return firstSideValid && secondSideValid && thirdSideValid;
  }
}

class Square extends Polygon{
  get isValid(){
    const points = this.points;
    return points[0] === this.area/points[0];
  }

  get area(){
    const points = this.points;
    return points[0] * points[1];
  }
}
