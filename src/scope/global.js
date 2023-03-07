// variables

var a; // declarando
var b = 'B'; // declaración y asignación

b = 'bb'; // reasignación
var a = 'aaa'; // redeclaración

// Global scope
var fruit = "Apple";

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = "México";
    console.log(country);
}

countries();
console.log(country);