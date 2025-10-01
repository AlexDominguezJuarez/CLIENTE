// Seleccionamos elementos del DOM
const inputNombre = document.getElementById("nombreAlumno");
const inputNotaAlumno = document.getElementById("notaAlumno");
const agregarBtn = document.getElementById("agregarBtn");
const divMostrarError = document.getElementById("mostrarError");
const divResultado = document.getElementById("resultado");
const btnPromedio = document.getElementById("promedioBtn");
const divPromedio = document.getElementById("promedio");

// Arrays para nombres y notas
let nombres = [];
let notas = [];

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

    // Limpiar mensaje de error
    divMostrarError.textContent = "";

    // Validaciones
    if (nombre === "") {
        divMostrarError.textContent = "❌ Campo de nombre vacío";
        return; // Detener ejecución
    }

    if (isNaN(nota)) {
        divMostrarError.textContent = "❌ La nota debe ser un número";
        return;
    }

    if (nota < 0 || nota > 10) {
        divMostrarError.textContent = "❌ La nota debe estar entre 0 y 10";
        return;
    }

    // Agregar los datos a los arrays
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
    // Validar que haya notas
    if (notas.length === 0) {
        divMostrarError.textContent = "❌ No hay notas registradas para calcular promedio";
        return;
    }

    // Calcular promedio
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;

    // Mostrar promedio
    divPromedio.textContent = `📊 Promedio de notas: ${promedio.toFixed(2)}`;
});
