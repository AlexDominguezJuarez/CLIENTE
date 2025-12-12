const nombre = document.getElementById("nombre");
const genero = document.getElementById("genero");
const año = document.getElementById("año");
const prioridad = document.getElementById("prioridad");
const lista = document.getElementById("lista");

document.addEventListener("DOMContentLoaded", cargarLocalStorage);


function añadirSerie(event) {
  event.preventDefault();

  const li = document.createElement("li");

  li.dataset.genero = genero.value;
  li.dataset.estado = "pendiente";
  li.dataset.nombre = nombre.value;
  li.dataset.año = año.value;
  li.dataset.prioridad = prioridad.value;

  li.classList.add("pendiente");

  li.innerHTML = `
    <h3>Nombre: ${nombre.value}</h3>
    <p>Género: ${genero.value}</p>
    <p>Año: ${año.value}</p>
    <p>Prioridad: ${prioridad.value}</p>
    <button class="marcar" onclick="vista(this)">Pendiente</button>
    <button class="editar" onclick="editarSerie(this)">Editar</button>
  `;


  lista.appendChild(li);
  guardarLocalStorage();
}


function vista(boton) {
  const li = boton.parentElement;

  if (li.dataset.estado === "pendiente") {

    li.dataset.estado = "visto";
    li.classList.remove("pendiente");
    li.classList.add("visto");
    boton.textContent = "Visto";

  } else {

    li.dataset.estado = "pendiente";
    li.classList.remove("visto");
    li.classList.add("pendiente");
    boton.textContent = "Pendiente";

  }
  filtrar();
  guardarLocalStorage();

}

function filtrar() {
  const filtroGenero = document.getElementById("filtroGenero").value;
  const filtroEstado = document.getElementById("filtroEstado").value;

  const items = lista.querySelectorAll("li");

  items.forEach(li => {
    const generoLi = li.dataset.genero;
    const estadoLi = li.dataset.estado;

    const coincideGenero = (filtroGenero === "todos" || filtroGenero === generoLi);
    const coincideEstado = (filtroEstado === "todos" || filtroEstado === estadoLi);

    if (coincideGenero && coincideEstado) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
}


function editarSerie(boton) {
  const li = boton.parentElement;

  const nuevoNombre = prompt("Nombre:", li.dataset.nombre);
  const nuevoGenero = prompt("Género:", li.dataset.genero);
  const nuevoAño = prompt("Año:", li.dataset.año);
  const nuevaPrioridad = prompt("Prioridad:", li.dataset.prioridad);

  li.dataset.nombre = nuevoNombre;
  li.dataset.genero = nuevoGenero;
  li.dataset.año = nuevoAño;
  li.dataset.prioridad = nuevaPrioridad;

  li.querySelector("h3").textContent = `Nombre: ${nuevoNombre}`;
  const p = li.querySelectorAll("p");
  p[0].textContent = `Género: ${nuevoGenero}`;
  p[1].textContent = `Año: ${nuevoAño}`;
  p[2].textContent = `Prioridad: ${nuevaPrioridad}`;

  filtrar();
  guardarLocalStorage()
}

function guardarLocalStorage() {
  const items = [];
  lista.querySelectorAll("li").forEach(li => {
    items.push({
      nombre: li.dataset.nombre,
      genero: li.dataset.genero,
      año: li.dataset.año,
      prioridad: li.dataset.prioridad,
      estado: li.dataset.estado
    });
  });
  localStorage.setItem("series", JSON.stringify(items));
}

function cargarLocalStorage() {
  const items = JSON.parse(localStorage.getItem("series")) || [];

  items.forEach(item => {
    const li = document.createElement("li");

    li.dataset.nombre = item.nombre;
    li.dataset.genero = item.genero;
    li.dataset.año = item.año;
    li.dataset.prioridad = item.prioridad;
    li.dataset.estado = item.estado;

    li.classList.add(item.estado);

    li.innerHTML = `
      <h3>Nombre: ${item.nombre}</h3>
      <p>Género: ${item.genero}</p>
      <p>Año: ${item.año}</p>
      <p>Prioridad: ${item.prioridad}</p>
      <button class="marcar" onclick="vista(this)">${item.estado === 'pendiente' ? 'Pendiente' : 'Visto'}</button>
      <button class="editar" onclick="editarSerie(this)">Editar</button>
    `;

    lista.appendChild(li);
  });
}

