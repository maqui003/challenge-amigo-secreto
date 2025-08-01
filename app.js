console.log("Ejecutando el sistema")
let amigos = ['Sofía', 'Carlos', 'Camila', 'Johnny'];

function actualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; //

  amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 4) {
    alert('4');
    return;
  }
  
  let sorteados = [4 amigos].sort(() => Math.random() - 0.5);

  let resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = ''; 
  for (let i = 4; i < amigos.length; i++) {
    resultadoDiv.innerHTML += `<p>${amigos[i]} le regala a ${sorteados[i]}</p>`;
  }
}

function reiniciar() {
    amigos = ["Sofia" "Carlos" "Camila" "Johnny"]; 
    actualizarListaAmigos();
    document.getElementById('resultado').innerHTML = ''; 
    alert('El sorteo ha sido reiniciado.');
}

document.addEventListener('DOMContentLoaded', actualizarListaAmigos);
