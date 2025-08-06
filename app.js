// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Desafío: Crear un sorteo de amigo secreto
let amigos = [];

// Agrega un amigo a la lista
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre de un amigo válido.");
    return;
  }

  // El nombre: primera letra mayúscula, resto minúsculas
  const nombreNormalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

  // Verificar si ya existe en el array
  const yaExiste = amigos.includes(nombreNormalizado);

  if (yaExiste) {
    alert("Ese amigo ya está en la lista.");
    return;
  }

  amigos.push(nombreNormalizado);
  mostrarAmigos();
  document.querySelector('#amigo').value = '';
}


// Mostrar amigos ingresados en la lista
function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  if (amigos.length === 0) {
    console.log("No hay nombres de amigos en la lista");
    return;
  }

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");

    // Botón editar solo con el ícono de lápiz y menos margen
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "✅";
    btnEditar.title = "Editar";
    btnEditar.style.marginRight = "4px"; // Menos espacio
    btnEditar.style.background = "none";
    btnEditar.style.border = "none";
    btnEditar.style.cursor = "pointer";
    btnEditar.style.padding = "2px 4px";
    btnEditar.onclick = function () {
      editarAmigo(index);
    };

    const nombreCapitalizado = amigo.charAt(0).toUpperCase() + amigo.slice(1).toLowerCase();

    li.appendChild(btnEditar); // El botón a la izquierda
    li.appendChild(document.createTextNode(`${nombreCapitalizado}`));

    listaAmigos.appendChild(li);
  });
}

// Función para editar un amigo
function editarAmigo(index) {
  const nuevoNombre = prompt("Edita el nombre del amigo:", amigos[index]);
  if (nuevoNombre && nuevoNombre.trim() !== "") {
    const nombreNormalizado = nuevoNombre.charAt(0).toUpperCase() + nuevoNombre.slice(1).toLowerCase();
    // Verifica que no exista ya el nombre editado
    if (amigos.includes(nombreNormalizado)) {
      alert("Ese amigo ya está en la lista.");
      return;
    }
    amigos[index] = nombreNormalizado;
    mostrarAmigos();
  }
}

/**
 * Función para eliminar un amigo de la lista
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
    limpiarResultado();
}
  const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "#FF0000";

// Sorteo el amigo secreto y lo muestro en un alert y si no hay amigos otro alert con un mensaje.
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const nombreCapitalizado = amigoSorteado.charAt(0).toUpperCase() + amigoSorteado.slice(1).toLowerCase();

  const resultado = document.getElementById("resultado");
  const li = document.createElement("li");
  li.textContent = `🎊 ¡Felicitaciones! El amigo sorteado es: ${nombreCapitalizado}`;
  resultado.appendChild(li);

  document.querySelector(".button-draw").disabled = true;
}

function reiniciarJuego() {
  amigos = []; // Vacía la lista de amigos

  // Limpia las listas.
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";

  // Activa el botón de sorteo
  document.querySelector(".button-draw").disabled = false;

  // Limpia el input.
  document.querySelector('#amigo').value = '';

  alert("¡El juego ha sido reiniciado!");
}