/*
Ejercicios: Strings
Copia y pega este contenido en tu editor y resuélvelo
*/

// 1. Concatena dos cadenas de texto


let cadena1="Hola";
let cadena2="Profe";
console.log(cadena1+" "+cadena2);



// 2. Muestra la longitud de una cadena de texto

let cadenaDeTexto="Hoy es miercoles dia 17";
let longitudCadena=cadenaDeTexto.length;
console.log(longitudCadena);




// 3. Muestra el primer y último carácter de un string

let primeraLetra=cadenaDeTexto.charAt(0);
let ultimaLetra=cadenaDeTexto.charAt(cadenaDeTexto.length-1)
console.log(primeraLetra,"//",ultimaLetra);




// 4. Convierte a mayúsculas y minúsculas un string

let cadenaMayuscula=cadenaDeTexto.toUpperCase();
let cadenaMinuscula=cadenaDeTexto.toLowerCase();
console.log(cadenaMayuscula,"//",cadenaMinuscula);




// 5. Crea una cadena de texto en varias líneas

let cadenaEnVariasLineas="Cadena\nEn\nVarias\nlineas";
console.log("\n"+cadenaEnVariasLineas);




// 6. Interpola el valor de una variable en un string

let nombre="Alex";
let edad=20;
let mensajeAMostrar="Hola, me llamo ${nombre} y tengo ${edad} años.";
console.log(mensajeAMostrar)



// 7. Reemplaza todos los espacios en blanco de un string por guiones

let cadenaFinal=cadenaDeTexto.replace(" ", "-");
console.log(cadenaDeTexto);



// 8. Comprueba si una cadena de texto contiene una palabra concreta

let palabraIncluida=false;
if (cadenaDeTexto.includes("miercoles")){
    palabraIncluida=true;
}
if(palabraIncluida==true){
    console.log("La palabra a analizar está incluida dentro de la cadena")
}else{
    console.log("La palabra a analizar no está incluida en la cadena")
}



// 9. Comprueba si dos strings son iguales

if (cadena1==cadena2){
    console.log("Es igual")
}else{
    console.log("No es igual")
}



// 10. Comprueba si dos strings tienen la misma longitud

let longitudCadena1=cadena1.length;
let longitudCadena2=cadena2.length;
if(longitudCadena1==longitudCadena2){
    console.log("Las dos cadenas tienen la misma longitud")
}else{
    console.log("Las dos cadenas no tienen la misma longitud")
}