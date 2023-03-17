// Reasignación y redeclaración
var firstName; // Cuando se declara, se le asigna un valor undefined
firstName = 'Gabs'; // asignamos valor
console.log(firstName);

var lastName = 'Special'; // Declaración y asignación
lastName = 'Snow'; // Reasignación
console.log(lastName);

var secondName = 'Yo'; // Declarando y asignando
var secondName = 'Otro'; // Redeclarando y reasignando
console.log(secondName);

// let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignando
console.log(fruit);

let fruit = 'Orange'; // No se puede redeclarar con let

// const
const animal = 'dog'; // declaración y asignación
// animal = 'cat'; // No se puede reasignar en const
//const animal = 'snake'; // No puede ser redeclarada
console.log(animal);

const vehicles = [];
vehicles.push('Mapache'); // Se añaden valores al array
console.log(vehicles);

vehicles.pop();  // Se eliminan valores del array
console.log(vehicles);
/* CONCLUSIÓN:
    Aunque const indica que ya no se puede cambiar su valor, si permite
    agregar/eliminar datos del arrego porque lo que es constante es la referencia
    al arreglo.
*/