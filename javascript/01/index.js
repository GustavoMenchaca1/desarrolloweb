//console.log ('Hola a Todos');

/* Ejercicio: Calacular el IMC de Luis y de Carlos.
El IMC es= al peso dividido la altura al cuadrado, luego comparar e indicar si el IMC de Carlos 
es superior al de Luis*/
// Solucion: 
var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturCarlos = 1.75;

var IMCLuis = pesoLuis/(alturaLuis*alturaLuis);
var IMCCarlos = pesoCarlos/(alturCarlos*alturCarlos);

var comparar = IMCCarlos > IMCLuis;

console.log ('¿El IMC de carlos es superior al IMC de Luis?' + comparar);