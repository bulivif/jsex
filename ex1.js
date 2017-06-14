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

// write a recursive function 

function isEven(n){
    if (n == 0)
    return true;
    else if (n == 1)
    return false;
    else 
    return isEven(n - 2);
}

console.log(isEven(50));
// -> true

console.log(isEven(75));
// -> false
console.log(isEven(-1));
// -> false

// bean counting function

function countChar(string, ch){
  var counted = 0;
  for(var i = 0; i < string.length; i++)
  if (string.charAt(i) == ch)
  counted +=1;
  return counted;
}

function countBs(string){
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// -> 2
console.log(countChar("kakkerlak", "k"));

// -> 4