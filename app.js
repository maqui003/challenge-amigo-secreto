// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Desafío: Crear un sorteo de amigo secreto

let amigos = ['Sofía', 'Carlos', 'Camila', 'Johnny'];

function actualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Necesitas al menos 2 amigos para el sorteo.');
    return;
  }

  // Copia y mezcla los amigos
  let sorteados = [...amigos];

  // Barajar hasta que nadie se asigne a sí mismo
  let intento = 0;
  let maxIntentos = 10;
  let valido = false;

  while (!valido && intento < maxIntentos) {
    sorteados.sort(() => Math.random() - 0.5);
    valido = amigos.every((amigo, i) => amigo !== sorteados[i]);
    intento++;
  }

  if (!valido) {
    alert('No se pudo realizar el sorteo sin repeticiones. Intenta de nuevo.');
    return;
  }

  // Mostrar resultados
  let resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    resultadoDiv.innerHTML += `<p>${amigos[i]} le regala a ${sorteados[i]}</p>`;
  }
}

function reiniciar() {
  amigos = ['Sofía', 'Carlos', 'Camila', 'Johnny'];
  actualizarListaAmigos();
  document.getElementById('resultado').innerHTML = '';
  alert('El sorteo ha sido reiniciado.');
}

document.addEventListener('DOMContentLoaded', actualizarListaAmigos);
