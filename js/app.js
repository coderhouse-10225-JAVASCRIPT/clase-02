let unNumero = 5;

if (unNumero > 10) {
    alert("Numero alto");
} else {
    alert("Numero menor a 10")
}

let nombre = prompt("Ingrese su nombre");

if (nombre == "") {
    alert("Che ingresa nombre!");
} else {
    alert("Hola señor " + nombre);
}

/* 
   Quiero ingresar un numero por prompt
   ver si el numero esta entre 18, 30 o es mayor 60
*/
// Ojo si no usan parseInt
let myAge = parseInt(prompt("Ingrese su edad"))
var esMenor = 18;
// Ojo si comparan strings
if (myAge <= esMenor) {
    alert("Sos menor de edad");
} 
else if(myAge < 30) {
    alert("Sos Mayor... no hay drama pasa")
} else if(myAge > 60) {
    alert("Quedate en casa...")
} else {
    alert("Listo pasas, vos tenes " + myAge)
}

// Ojo con Javascript
// "1" + 1
// "1" - 1