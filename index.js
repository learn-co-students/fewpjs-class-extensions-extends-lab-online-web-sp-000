class Polygon {
constructor(sides){
    this.sides = sides
}

get countSides(){
    return this.sides.length;
}

get perimeter(){
let per = 0;
for (let i = 0; i < this.sides.length; i++){
    per += this.sides[i];
}
return per;
}
}

class Triangle extends Polygon{
get isValid(){
    
if(this.sides.length === 3){
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    if(a + b > c && a + c > b && b + c > a){
        return true;
    }else{
        return false;
    }
    
}else{
    return false;
}

}
}



class Square extends Polygon{
get area (){
    for(let i = 0; i < this.sides.length; i++)
    return  this.sides[i] ** 2;
}

get isValid(){
    
if(this.sides.length ===4){
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    let d = this.sides[3];
    if(a==b && b==c && c==d){
        return true;
    
    }else{
        return false;
    }
}else{
    return false;
}

}


}