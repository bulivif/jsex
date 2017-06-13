// a function to take two arguments and return the smallest of both

function min(a,b){
  if( a<b){
    return a;
  }else {
    return b;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10