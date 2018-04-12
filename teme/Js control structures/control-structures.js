var a = 0;
while (a<20) {
 a++; console.log(a);
}

var b = 1;
while (b<19) {
  b = b + 2; console.log(b)
}

var arr = [1, 34, 25, 36, 5, 10, 77].reduce((a, b)=> a + b, 0);
console.log(arr);
//This is the simple way of doing it

var array1 = [1, 34, 25, 36, 5, 10, 77];
for (var c = 0, sum = 0; c < array1.length; sum = sum + array1[c++] );
console.log('The sum of the array elements is ', sum);
  
var array2 = [1, 3, 2, 44, 55, 124, 77, 21, 35];
console.log(Math.max(...array1));




