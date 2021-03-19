let myname = prompt("Ingrese nombre");
let surname = prompt("Ingrese apellido");

// Operador AND para chequear que ambas condiciones son verdaderas
if ( (myname != "")  && (surname != "") ) {
    alert("Hola señor: " + myname + " " + surname);
}
else {
    alert("Por favor ingresa los datos");
}


let nombreIngresado = prompt("Ingrese nombre solamente");
let edad = parseInt(prompt("Ingrese edad"));

if ( (edad > 18) && ( (nombreIngresado == "ALE") || (nombreIngresado == "ale") )  ) {
    alert("Hola Ale")
}