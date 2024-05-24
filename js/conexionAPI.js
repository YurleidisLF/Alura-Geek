const listaDeProductos = ("https://api-khaki-kappa-73.vercel.app/products");

async function listaProductos() {
    const conexion = await fetch(listaDeProductos);
    const conexionConvertida = await conexion.json(); 
    return conexionConvertida;
}

async function enviarProducto(name, price, image) {
    const conexion = await fetch(listaDeProductos, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
        })
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function borrarProducto(id) {
    try {
        const response = await fetch(`${listaDeProductos}/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el producto');
        }

        return response;
    } catch (error) {
        console.error(`Error al eliminar el producto: ${error}`);
    }
}

export const conexionAPI = {
    listaProductos, enviarProducto, borrarProducto
};