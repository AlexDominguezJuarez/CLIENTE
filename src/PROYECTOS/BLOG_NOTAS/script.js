const notaForm = document.getElementById("notaForm");
const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");

let notas = JSON.parse(localStorage.getItem("notas")) || [];

notaForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let nuevaNota = {
    titulo: titulo.value,
    contenido: contenido.value
  };

  notas.push(nuevaNota);
  localStorage.setItem("notas", JSON.stringify(notas));

  notaForm.reset();
  mostrarNotas();
});

function mostrarNotas() {
  const lista = document.getElementById("listaNotas");
  lista.innerHTML = "";

  notas.forEach((nota, index) => {
    const div = document.createElement("div");
    div.classList.add("nota");

    div.innerHTML = `
      <h3>${nota.titulo}</h3>
      <p>${nota.contenido}</p>
      <button class="borrar" onclick="borrarNota(${index})">Borrar</button>
    `;

    lista.appendChild(div);
  });
}

function borrarNota(index) {
  notas.splice(index, 1);
  localStorage.setItem("notas", JSON.stringify(notas));
  mostrarNotas();
}

// Cargar al abrir la página
mostrarNotas();
