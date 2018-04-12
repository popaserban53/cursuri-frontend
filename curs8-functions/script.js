var persons = [
  {
    name: "Ana",
    gender: "F",
    height: 1.6,
    weight: 60
  },
  {
    name: "Ion",
    gender: "M",
    height: 1.8,
    weight: 180
  }
];


for (var i = 0; i < persons.lenght; i++) {
  console.log(persons[i]);
  
  var currentPerson = persons[i]
  
  var bmi = currentPerson.weight / (currentPerson.height * currentPerson.height)
  
  console.log(currentPerson.name + '|' + currentPerson.gender + '|BMI:|' + bmi);
  if (bmi <18.5) {console.log(currentPerson.name + '|' + currentPerson.gender + '|' + bmi + 'underweight')}
  else if (bmi <25) {console.log(currentPerson.name + '|' + currentPerson.gender + '|' + bmi + 'normal')}
  else if (bmi <30) {console.log(currentPerson.name + '|' + currentPerson.gender + '|' + bmi + 'overweight')}
  else {
    console.log(currentPerson.name + '|' + currentPerson.gender + '|' + bmi + 'obese')}     
}
    
