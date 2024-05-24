import { conexionAPI } from "./conexionAPI.js";

console.log("Se subió el archivo borrar Producto");

async function eliminarProducto(id) {
    await conexionAPI.borrarProducto(id);
    window.location.href = "../index.html";
}

window.addEventListener('load', function () {
    const botonesBorrar = document.querySelectorAll('.product__delete');

    botonesBorrar.forEach(btn => {
        const id = btn.getAttribute('data-id');
        console.log("ID del botón: " + id);

        btn.addEventListener('click', (event) => {
            event.preventDefault(); // Previene comportamiento por defecto del botón si está dentro de un formulario
            eliminarProducto(id);
        });
    });
});

