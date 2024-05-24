document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('productoForm').addEventListener('submit', function(event) {
        // Obtiene los valores de los campos:
        var name = document.querySelector('[data-name]').value;
        var price = document.querySelector('[data-price]').value;
        var image = document.querySelector('[data-image]').value;

        // Limpia mensajes de error previos:
        document.getElementById('nameError').textContent = "";
        document.getElementById('priceError').textContent = "";
        document.getElementById('imageError').textContent = "";

        var valid = true;

        // Validación del nombre:
        if (name.trim() === "") {
            document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
            valid = false;
        }

        // Validación del precio:
        if (price.trim() === "") {
            document.getElementById('priceError').textContent = 'El precio es obligatorio.';
            valid = false;
        } else if (isNaN(price) || Number(price) <= 0) {
            document.getElementById('priceError').textContent = 'El precio debe ser un número positivo.';
            valid = false;
        }

        // Validación de la imagen:
        if (image.trim() === "") {
            document.getElementById('imageError').textContent = 'La imágen es obligatoria.';
            valid = false;
        } else if (!isValidURL(image)) {
            document.getElementById('imageError').textContent = 'Debe ser una URL válida.';
            valid = false;
        }

        // Si no es válido, previene el envío del formulario:
        if (!valid) {
            event.preventDefault();
        }
    });

    document.querySelector('.boton_limpiar').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir cualquier comportamiento por defecto
        limpiarFormulario();
    });
});

// Función para limpiar el formulario:
function limpiarFormulario() {
    document.querySelector('[data-name]').value = "";
    document.querySelector('[data-price]').value = "";
    document.querySelector('[data-image]').value = "";
    document.getElementById('nameError').textContent = "";
    document.getElementById('priceError').textContent = "";
    document.getElementById('imageError').textContent = "";
}

// Función para validar URL:
function isValidURL(string) {
    var res = string.match(/(https?:\/\/[^\s]+)/g);
    return (res !== null);
}
