function printMessage() {
  console.log("My first function");
}

printMessage();

function print(message) {
  console.log(message);
}

print(); //undefined
print("My first function with parameters");

function computeSum(a, b) {
  console.log('sum', a+b);
  a = "My special number";
  console.log(a);
}
computeSum(2, 3); //5, My special number
var a = 2, b = 3;
computeSum(a, b); //sum 5, My special number
console.log(a); // a is still 2!

function computeFullname(name) {
  console.log(name.first + '' +name.last);
  name.last = "Batman"
  console.log(name.last); // Batman
}
var nameObject = {
  first : "Bruce",
  last : "Wayne"
};

displayFullName(nameObject); // Bruce Wayne, Batman
console.log(nameObject.last); //Batman
