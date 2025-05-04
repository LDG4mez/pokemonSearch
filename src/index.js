async function buscarPokemon() {
  const input = document.getElementById("pokemonInput").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Pokémon no encontrado");

    const data = await response.json();
    const tipo = data.types.map(t => t.type.name).join(", ");

    const fila = `
      <tr>
        <td><img src="${data.sprites.front_default}" alt="${data.name}"></td>
        <td>${data.name}</td>
        <td>${data.id}</td>
        <td>${tipo}</td>
        <td>${data.weight / 10} kg</td>
        <td>${data.height / 10} m</td>
      </tr>
    `;

    document.getElementById("pokemonData").innerHTML = fila;
    document.getElementById("pokemonTable").classList.remove("oculto");
  } catch (error) {
    alert(error.message);
    document.getElementById("pokemonTable").classList.add("oculto");
  }
}

