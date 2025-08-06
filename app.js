// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Desafío: Crear un sorteo de amigo secreto
const nombres = ["Camila", "Nacho", "Emma", "Mila"];
let sorteos = {};

function generarSorteo() {
  let disponibles = [...nombres];
  sorteos = {};

  for (let nombre of nombres) {
    let posibles = disponibles.filter(n => n !== nombre);
    if (posibles.length === 0) {
      // Reiniciar si no es posible completar el sorteo
      return generarSorteo();
    }
    let elegido = posibles[Math.floor(Math.random() * posibles.length)];
    sorteos[nombre] = elegido;
    disponibles = disponibles.filter(n => n !== elegido);
  }
}

document.getElementById("sortear").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;

  if (!nombre) {
    document.getElementById("resultado").textContent = "Por favor, selecciona tu nombre.";
    return;
  }

  if (Object.keys(sorteos).length === 0) {
    generarSorteo();
  }

  const amigoSecreto = sorteos[nombre];
  document.getElementById("resultado").textContent = `Tu amigo secreto es: 🎉 ${amigoSecreto}`;
});
