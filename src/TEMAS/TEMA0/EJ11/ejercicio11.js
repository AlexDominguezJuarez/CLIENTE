let cadena="Hoy es miercoles 24";
let arrayDeNumeros=[1,4,1,18,4];
let arrayNumero=[1,4,1,18,4];



// 1. Crea una función que reciba dos números y devuelva su suma

function sumar(a,b){
    return a+b;
}


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function devolverNumeroMayor(arrayNumero){
    let numeroMayor=0;
    for (let i = 0; index < arrayNumero.length; i++) {
        if(numeroMayor<arrayNumero[i]){
            numeroMayor=arrayNumero[i];
        }
    }
    return numeroMayor;
}



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(cadena){
    contador=0;
    for(let i=0;i<cadenaDeTexto.length;i++){
        let letra=cadenaDeTexto.charAt(i);
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        contador++;
        }
    return contador;
}

}


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function transformarAMayusculas(cadena){
    return cadena.toUpperCase();
}


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primoONo(numeroAComprar){
    if(numeroAComprar%2==0){
        return false;
    }
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosIgualesArrays(array1,array2){
    let posicionArrayCompartido=0
    arrayElementosCompartidos=[];

    for(let i=0;i<array1.length;i++){

        for(let j=0;j<array2.length;j++){

            if(array1[i]==array2[j]){

                arrayElementosCompartidos[posicionArrayCompartido]=array1[i];
                posicionArrayCompartido++;
            
            }
        }
    }
    return posicionArrayCompartido;
}


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumarNumerosPares(arrayDeNumeros){
    let suma=0
    for(let i=0;i<arrayDeNumeros.length+1;i++){
        if(arrayDeNumeros[i]%2==0){
            suma=suma+arrayDeNumeros[i];
        }
    }
    console.log(suma)
    return suma;
}



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarAlCuadrado(arrayDeNumeros){
    let arrayAlCuadrado=[];
    let contadorDePosicion=0;
    for (let i=0;i<arrayDeNumeros.length;i++){
        let sumaAlCuadrado=arrayDeNumeros[i]*arrayDeNumeros[i];
        arrayAlCuadrado[posicionNuevoArray]=sumaAlCuadrado;
    }
    return arrayAlCuadrado;
}


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function cadenaInversa(cadena){
    let fraseInvertida="";
    for(let i=cadena.length;i>-1;i--){
        fraseInvertida=fraseInvertida+cadena.charAt(i);
        console.log(fraseInvertida);
    }
    return fraseInvertida;
}



// 10. Crea una función que calcule el factorial de un número dado

function calcularFactorial(numero){
    let factorial=1
    for (let i=1;i<numero+1;i++){
        factorial=factorial*i;
    }
    console.log(factorial);
    return factorial

    
}


