// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Desafío: Crear un sorteo de amigo secreto

let listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  listaAmigos.push(nombre);
  mostrarLista();
  input.value = "";
}

function mostrarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearEmparejamientos() {
  if (listaAmigos.length < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  let copiaAmigos = [...listaAmigos];

  // Desordenar la copia
  copiaAmigos = copiaAmigos.sort(() => Math.random() - 0.5);

  // Reintentar si alguien se empareja consigo mismo
  let intentos = 0;
    while (hayEmparejamientoInvalido(listaAmigos, copiaAmigos) && intentos < 10) {
    copiaAmigos = copiaAmigos.sort(() => Math.random() - 0.5);
    intentos++;
  }

  if (hayEmparejamientoInvalido(listaAmigos, copiaAmigos)) {
    alert("No se pudo realizar el sorteo sin repeticiones. Intenta de nuevo.");
    return;
  }

  // Mostrar resultado
  let resultado = "<h3>Resultado del sorteo:</h3><ul>";
  for (let i = 0; i < listaAmigos.length; i++) {
    resultado += `<li>${listaAmigos[i]} → ${copiaAmigos[i]}</li>`;
  }
  resultado += "</ul>";

  document.getElementById("resultado").innerHTML = resultado;
}
function hayEmparejamientoInvalido(original, mezclado) {
  for (let i = 0; i < original.length; i++) {
    if (original[i] === mezclado[i]) {
      return true;
    }
  }
  return false;
}
