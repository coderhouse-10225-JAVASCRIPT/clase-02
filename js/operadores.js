let myname = prompt("Ingrese nombre");
let surname = prompt("Ingrese apellido");

// Operador AND para chequear que ambas condiciones son verdaderas
if ( (myname != "")  && (surname != "") ) {
    alert("Hola señor: " + myname + " " + surname);
}
else {
    alert("Por favor ingresa los datos");
}


