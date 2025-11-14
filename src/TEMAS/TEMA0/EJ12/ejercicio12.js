
// 1. Crea un objeto con 3 propiedades

const persona={
    nombre : "Manolo",
    edad: 45,
    colorOjos: "Azules",

    saludar: function (){
        console.log(this.nombre+" te dice hola")

    }
};
console.log("\n");
console.log("\n");



// 2. Accede y muestra su valor

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.colorOjos);

console.log("\n");
console.log("\n");


// 3. Agrega una nueva propiedad

persona.altura=175;
console.log(persona.altura);
console.log("\n");
console.log("\n");


// 4. Elimina una de las 3 primeras propiedades

delete persona.edad;


// 5. Agrega una función e invócala

persona.saludar;
console.log("\n");
console.log("\n");


// 6. Itera las propiedades del objeto

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
console.log("\n");
console.log("\n");


// 7. Crea un objeto anidado

const objetoAnidado={
    nombre : "Manolo",
    edad: 45,
    colorOjos: "Azules",
    viviendas:{
        casa :"Madrid",
        piso:"Almazora",
        adosado:"Benicasim"
    }
}


// 8. Accede y muestra el valor de las propiedades anidadas

console.log(objetoAnidado.viviendas.adosado);
console.log("\n");
console.log("\n");


// 9. Comprueba si los dos objetos creados son iguales

const sonIguales = JSON.stringify(persona) == JSON.stringify(objetoAnidado);
console.log(sonIguales); 
console.log("\n");
console.log("\n");


// 10. Comprueba si dos propiedades diferentes son iguales

 const sonIguales2 = JSON.stringify(persona.colorOjos) == JSON.stringify(persona.edad);
 console.log(sonIguales2);
