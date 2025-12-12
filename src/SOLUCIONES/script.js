const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  resultsDiv.innerHTML = "Buscando...";

  try {
    const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${searchTerm}`);
    const data = await response.json();
    const characters = data.amiibo || [];

    if (characters.length === 0) {
      resultsDiv.innerHTML = "<p>No se encontraron personajes.</p>";
      return;
    }

    resultsDiv.innerHTML = characters.map(char => `
      <div class="character-card">
        <img src="${char.image}" alt="${char.character}">
        <h3>${char.character}</h3>
        <p>${char.gameSeries}</p>
      </div>
    `).join("");

  } catch (error) {
    resultsDiv.innerHTML = "<p>Error al buscar personajes.</p>";
    console.error(error);
  }
});
