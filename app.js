let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
        input.value = "";
    } else {
        alert("Ingresa un nombre válido y que no esté repetido.");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para hacer el sorteo.");
        return;
    }
    
    let amigosDisponibles = [...amigos];
    let resultado = {};

    for (let amigo of amigos) {
        let posibles = amigosDisponibles.filter(a => a !== amigo);
        if (posibles.length === 0) {
            return alert("No se pudo realizar el sorteo, intenta nuevamente.");
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigo] = elegido;
        amigosDisponibles = amigosDisponibles.filter(a => a !== elegido);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    for (let [amigo, asignado] of Object.entries(resultado)) {
        let li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultadoLista.appendChild(li);
    }
}
