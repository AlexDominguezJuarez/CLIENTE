// 1. Crea un bucle que imprima los números del 1 al 20

let numeroAImprimir=0;
for (let i=0;i<21;i++){
    console.log(i);
}
console.log("\n\n\n")

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let contador=0;
for (let i=0;i<101;i++){
    contador=contador+i
}
console.log(contador);
console.log("\n\n\n")


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i=0;i<51;i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("\n\n\n")


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let arrayDeNombre=["pepe","Anna","Gustavo","lolo","Sebastian"];
for (let i=0;i<arrayDeNombre.length;i++){
    console.log(arrayDeNombre[i]);
}
console.log("\n\n\n")



// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadenaDeTexto="Hoy es viernes 19";
contador=0;
for(let i=0;i<cadenaDeTexto.length;i++){
    let letra=cadenaDeTexto.charAt(i);
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        contador++;
    }
}

console.log(contador);
console.log("\n\n\n");

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayDeNumeros=[1,48,4548,789,45]
contador=1
for (let i=0;i<arrayDeNumeros.length;i++){
    contador=contador*arrayDeNumeros[i];
}
console.log(contador)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i=0;i<11;i++){
    console.log(i+"* 5= "+i*5)
}

console.log("\n\n\n");


// 8. Usa un bucle para invertir una cadena de texto

let fraseAInvertir="Esta es la frase a invertir";
let fraseInvertida="";
for(let i=fraseAInvertir.length;i>-1;i--){
    fraseInvertida=fraseInvertida+fraseAInvertir.charAt(i);
    console.log(fraseInvertida);
}

    
console.log("\n\n\n");


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let n1 = 0
let n2 = 1

console.log(n1); 
console.log(n2); 

for (let i = 2; i < 10; i++) {  
    siguiente = n1 + n2;
    console.log(siguiente);
    n1 = n2;
    n2 = siguiente;
}


console.log("\n\n\n");


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let posicionNuevoArray=0;
let arrayDeNumerosMayores10=[];
for (let i=0;i<arrayDeNumeros.length;i++){
    if(arrayDeNumeros[i]>10){
        arrayDeNumerosMayores10[posicionNuevoArray]=arrayDeNumeros[i];
        posicionNuevoArray++;
    }
}

for(let i=0;i<arrayDeNumerosMayores10.length;i++){
    console.log(arrayDeNumerosMayores10[i]);
}
console.log("\n\n\n");
