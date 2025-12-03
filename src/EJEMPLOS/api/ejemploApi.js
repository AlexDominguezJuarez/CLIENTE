// ejemploApi.js
const fetch = require("node-fetch"); // Funciona en Node 12+, 20 y CommonJS

async function cargarUsuario() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

    const data = await res.json();
    const usuario = data.results[0];

    console.log("🎯 Usuario aleatorio:");
    console.log("Nombre:  ", usuario.name.first, usuario.name.last);
    console.log("Email:   ", usuario.email);
    console.log("País:    ", usuario.location.country);
    console.log("Ciudad:  ", usuario.location.city);
    console.log("Teléfono:", usuario.phone);
    console.log("Foto:    ", usuario.picture.large);

  } catch (err) {
    console.error("❌ Error al cargar el usuario:", err.message);
  }
}

cargarUsuario();
