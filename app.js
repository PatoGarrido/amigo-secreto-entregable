//
//
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    } else if (amigos.includes(nombre)) {
        alert("Este amigo ya está en la lista.");
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');

        // Agregar texto del amigo con su número
        li.textContent = `${index + 1}. ${amigo}`;

        // Crear un botón para eliminar el amigo
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.classList.add('btn-eliminar');
        botonEliminar.onclick = () => eliminarAmigo(amigo); // Usar el nombre para eliminar

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(nombre) {
    amigos = amigos.filter(amigo => amigo !== nombre); // Eliminar el amigo por nombre
    actualizarLista(); // Actualizar la lista después de la eliminación
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Ingresar al menos 2 amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    // Eliminar el amigo sorteado, si es necesario
    // amigos.splice(indiceAleatorio, 1);
    // Actualizar la lista de amigos para reflejar el cambio
    // actualizarLista();
}

// Función para reiniciar la aplicación
function reiniciarAplicacion() {
    amigos = [];
    actualizarLista();

    const resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = '';
    }
}

// Reinicio al hacer clic en el botón
document.getElementById('reinicio').onclick = reiniciarAplicacion;
