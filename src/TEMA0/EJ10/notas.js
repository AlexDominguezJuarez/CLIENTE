// Seleccionamos elementos del DOM

const inputNombre = document.getElementById("nombreAlumno");
const divResultado=document.getElementById("resultado");
const divMostrarError=document.getElementById("mostrarError")
const divPromedio=document.getElementById("promedio")

//...AGREGA AQUÍ EL RESTO DE ELEMENTOS DEL DOM

const inputNotaAlumno=document.getElementById("notaAlumno")

// Arrays separados para nombres y notas

let nombres = [];

//...CREA UN ARRAY LLAMADO notas PARA ALMACENAR LAS NOTAS

let notas=[]

// Función para mostrar la lista de alumnos

function mostrarAlumnos() {
    divResultado.innerHTML = ""; // Limpiar div
    for (let i = 0; i < nombres.length; i++) {
        divResultado.innerHTML += `${i + 1}. ${nombres[i]} - Nota: ${notas[i]} <br>`;
    }
}

// Agregar alumno

agregarBtn.addEventListener("click", function() {
    const nombre = inputNombre.value.trim();
    const nota = Number(inputNotaAlumno.value);

    if(nombre==""){
        divMostrarError.textContent="Campo de nombre vacio"
        return
    }

    if(isNaN(nota)){
        divMostrarError.textContent="El numero ingresado no es un entero"
        return
    }

    if(nota<0||nota>10){
        divMostrarError.textContent="Valor de nota no disponible"
        return
    }

    /*...CONDICIONAL QUE MUESTRE ERROR SI
    EL NOMBRE ESTÁ VACÍO
    LA NOTA NO ES UN NÚMERO
    LA NOTA ES MENOR QUE 0 O MAYOR QUE 10
    QUE DETENGA LA EJECUCIÓN DE LA FUNCIÓN Y SALGA DE ELLA
     */


    //... AÑADE LOS DATOS A LOS DOS ARRAYS CON EL MÉTODO PUSH

    nombres.push(nombre);
    notas.push(nota);

    // Limpiar inputs
    inputNombre.value = "";
    inputNotaAlumno.value = "";

    // Mostrar lista actualizada
    mostrarAlumnos();
});



// Calcular promedio
btnPromedio.addEventListener("click", function() {
    //...SI NO HAY ELEMENTOS EN EL ARRAY DE NOTAS, QUE DETENGA LA FUNCIÓN Y SALGA DE ELLA

    if(notas.length==0){
        divMostrarError.textContent="No se ha podido calcular el promedio"

        return
    }
    //...MOSTRANDO ALGÚN MENSAJE DE ERROR


    //...EXTRAER EL CONTENIDO DEL ARRAY NOTAS

    //...CALCULAR EL PROMEDIO Y PONERLO EN LA VARIABLE promedio
    let sumaDeNotas=0;
    let cantidadExamenes=0
    let promedio =0;
    for(let i=0;i<notas.length;i++){
        sumaDeNotas=notas[i]+sumaDeNotas;
        cantidadExamenes++;
    }
    promedio=sumaDeNotas/cantidadExamenes;

    divPromedio.textContent = `Promedio de notas: ${promedio.toFixed(2)}`;
});
