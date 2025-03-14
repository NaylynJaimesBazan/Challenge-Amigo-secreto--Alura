// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigosElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar el nombre al array de amigos si no está repetido
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarLista();
    } else {
        alert('Este nombre ya ha sido agregado.');
    }

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    listaAmigosElement.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigosElement.appendChild(li);
    }
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles para el sorteo
    if (amigos.length === 0) {
        alert('Agregue al menos un nombre para realizar el sorteo.');
        return;
    }

    // Generar un índice aleatorio y obtener el nombre sorteado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

// Permitir la adición presionando Enter
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
