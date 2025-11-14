
/*
Ejercicios: Condicionales
*/

// if/else/else if/ternaria

let nombre="Pepe";

let usuario ="pepemadalenas";
let contraseña=12345;

let numero=-2;
let edad=15;

// 1. Imprime por consola tu nombre si una variable toma su valor

if(nombre=="Alex"){
    console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

if(usuario =="pepemadalenas" && contraseña==12345){
    console.log("Sesión iniciada con exito")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

if (numero>0){
    console.log("El numero es positivo")
}else if (numero==0){
    console.log("El numero es 0")
}else if (numero<0){
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

if(edad>=18){
    console.log("Eres mayor de edad")
}else {
    console.log("Eres menor de edad, te faltan "+18-edad+" años para poder votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
// dependiendo de la edad

let mayorOMenor =(edad>=18) ? "mayor" : "menor";
console.log(mayorOMenor);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

 let mes=5
if (mes==1||2||12){
    console.log("La estacion es invierno")
}else if (mes==3||4||5){
    console.log("La estacion es primavera")
}else if (mes==6||7||8){
    console.log("La estacion es verano")
}else if (mes==9||10||11){
    console.log("La estacion es otoño")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes==1,3,5,7,8,10,12){
    console.log("El mes trae 31 dias")
}else if(mes==2){
    console.log("El mes trae 28 dias")
}else if(mes==4,6,9,11){
    console.log("El mes trae 30 dias")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "es"; 

switch (idioma) {
  case "es":
    console.log("¡Hola!");
    break;
  case "en":
    console.log("Hello!");
    break;
  case "fr":
    console.log("Bonjour!");
    break;
    default:
  console.log("Opcion no valida")
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6

 mes="Enero";
switch (mes){
    case "Enero":
        console.log("Estas en Invierno")
        break;
    case "Febrero":
        console.log("Estas en Invierno")
        break;
    case "Marzo":
        console.log("Estas en primavera")
        break;
    case "Abril":
        console.log("Estas en primavera")
        break;
    case "Mayo":
        console.log("Estas en primavera")
        break;
    case "Junio":
        console.log("Estas en verano")
        break;
    case "Julio":
        console.log("Estas en verano")
        break;
    case "Agosto":
        console.log("Estas en verano")
        break;
    case "Septiembre":
        console.log("Estas en verano")
        break;
    case "Octubre":
        console.log("Estas en otoño")
        break;
    case "Noviembre":
        console.log("Estas en otoño")
        break;
    case "Diciembre":
        console.log("Estas en otoño")
        break;
        default:
  console.log("Opcion no valida")
        
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7

mes = 2;

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("El mes trae 31 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("El mes trae 30 días");
    break;
  case 2:
    console.log("El mes trae 28 días");
    break;
  default:
  console.log("Opcion no valida")
}
