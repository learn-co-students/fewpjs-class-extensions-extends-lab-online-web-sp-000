// Your code here
class Polygon {
   constructor(sidesArray) {
      this.sidesArray = sidesArray;
   }
   // 1) Polygon has a countSides getter method that returns the number of sides of the polygon
   get countSides() {
      return this.sidesArray.length;
   }
   //  2) Polygon has a perimeter getter that calculates perimeter
   get perimeter() {
      return this.sidesArray.reduce((acc, currSide) => acc + currSide);
   }
}


class Triangle extends Polygon {
   constructor(sidesArray) {
      super(sidesArray);
   }
   // 3) checks for valid triangle
   get isValid() {
      if (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2] ||
          this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0] || 
          this.sidesArray[2] + this.sidesArray[0] > this.sidesArray[1]){
         return true;
      } else {
         return false;
      }
   }
   // 4) has a perimeter getter inherited from Polygon
}

// Square
// 5) has a Square class
// 6) has a perimeter getter inherited from Polygon
// 7) calculates the area
// 8) checks for valid square