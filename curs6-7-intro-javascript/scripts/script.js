// alert ("my first alert from a different file.");
var x 
x = 2;
console.log(x);
// numbers 
var age = 23;
console.log ("My age is", age);
var price = 4.99; // not "4.99$" <-- This is a string, not a number.
console.log ("The price is " ,price , "$");
var fullname = "Popa Serban";
console.log ("My name is" , fullname);
var paragraph = "Line 1 \nLine 2"; 
console.log (paragraph);
var backslash = "variable with \\";
console.log (backslash);
var quotes = "\"this is a string inside quotes\"";
console.log(quotes);
var differentQuotes = '"another string inside quotes"';
console.log (differentQuotes);
var isTrue = true; 
    isFalse = false;
console.log (isTrue, isFalse);
var nullValue = null;
console.log ("Null Value" , nullValue);
var undefinedValue;
console.log ("Undefined Value", undefinedValue);

var x = 2
console.log (x); // 2
x = undefined;
console.log (x); // undefined
console.log (43%10); // 3 (restul impartirii lui 43 la 10)
console.log (2=="2"); // true
console.log(2==="2"); // false -> verifica egalitatea atat si tipul
console.log(2===2);

console.log(typeof 10); //number
console.log(typeof "text"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof z); //undefined

console.log(typeof nullValue); //object
console.log(typeof nullValue === null); //false

var n = -10;
var isPositive = n > 0 ? 1 : 0;
console.log("is positive", isPositive);

var p = 1 + 1;
var q = p * 2;
console.log(p, q);

var firstName = "Chuck"
var lastName = "Norris"

var fullName = firstName + " " + lastName;
console.log("fullName" , fullName);

var names = ['marcus','tamas','alex','diana','norbert','razvan'];
console.log(names[2]);
console.log(names.sort());
console.log('length' , names.length);

var robot = {
  model : 'TRX1000',
  color : 'red',
  "full name" : "Megatron",
  // color : 'blue' ,<-- having duplicate keys in the same object
  walk : function() {
  }
};
console.log('color', robot.color);
console.log('full name', robot["full name"]); // robot.full name 
robot.walk();

var color = "red"; //console.log(color);
if (color === "red") {console.log("red color");
} else {console.log("not red");
}

var email = "serbi_pop@ayahoo.com";
if (email.indexOf("@") >-1) {
  console.log('email correct');
} else {console.log('email incorrect');}

var weather = "freezing"
switch (weather) {
 case 'rainy':
 console.log("Bring an umbrella.");
 break;
 case 'sunny':
 console.log("Dress lightly.");
 break;
 case 'cloudy':
 console.log("Go outside.");
 break;
 default :
 console.log("Unknown weather type!");}

var i = 0;
while (i < 10) {
  console.log('number', i);
  i++; //i = i + 1
} console.log('while done');

var j = 15;
do {
  console.log('j',j);
  j++;
} while (j < 10);

var numbers = [4, 6, 8, -2, 5, -9];
for (var k = 0; k < numbers.length; k++) {
  console.log('position k', k);
  console.log('element at position k', numbers[k]);
}