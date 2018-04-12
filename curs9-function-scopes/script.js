var a = 2; //global 

function displayVariables() {
  var b = 3;
  c = 4;
  console.log(a, 'inside a function'); //2
  console.log(b, 'inside a function'); //3
  console.log(c, 'inside a function'); //4
} 

displayVariables();
 console.log(a, 'outside a function'); //2
 console.log('outside a function', typeof b); //undefined
 console.log(c, 'outside a function'); //4

//---------------------------------------------

var x = 1; //global
function firstFunction() {
  var y = 2; //local into firstFunction
 function secondFunction() {
   var z = 3;
   console.log('Second x =', x);//1
   console.log('Second y =', y);//2
   console.log('Second z =', z);//3
 function thirdFunction(z) {
   z = 5; //not global
   console.log('Third x =', x);//1
   console.log('Third y =', y);//2
   console.log('Third z =', z);//5
 }
  thirdFunction();
}
 secondFunction();
 
console.log('Third y =', y);//1
console.log('Third x =', x);//2
console.log('Third z =',typeof z);//undefined
}

firstFunction();

//------------------------------------

(function demoHoisting(){
  var a = 1000;
  console.log (a + "" + b);
  var b = 2000;
})(); //IIFE

//this is identical with

(function demoHoisting(){
  var a = 1000;
  var b;
  console.log (a + "" + b);
  b = 2000;
})(); //IIFE

//Diferenta dintre function declaration si function expression cand vine vorba de hoisting.

