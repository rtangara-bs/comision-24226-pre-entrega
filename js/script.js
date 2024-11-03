const alternarMenu = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu');

alternarMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
});

let indiceActual = 0;
const imagenes = document.querySelectorAll('.contenedor_imagenes img');

function mostrarSiguienteImagen() {
    imagenes[indiceActual].classList.remove('activa');
    indiceActual = (indiceActual + 1) % imagenes.length;
    imagenes[indiceActual].classList.add('activa');
}

setInterval(mostrarSiguienteImagen, 3000); 

function abrirModal(idModal) {
    document.getElementById(idModal).style.display = "block";
}

function cerrarModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}
