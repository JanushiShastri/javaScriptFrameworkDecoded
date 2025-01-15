//object literal
var objliteral ={
    firstName: "Janushi",
    isACoder: true
}

//json literal shoudl always be in quotes
console.log(JSON.stringify(objliteral));//converting obj literal to json format 
var jsonLiteral = JSON.parse('{"firstname":"Janushi"', '"isACoder": true}');

console.log(jsonLiteral);