
import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

console.log("Se cargo el archivo mostrar Productos");

function createCard(id, name, price, image) {
    const card = document.createElement("div");

    card.className = "card";
    card.setAttribute("data-id", id);
    card.innerHTML = ` <img class="product__card__img" src="${image}" alt="">
    <h3 class="product__name">${name}</h3>
    <div class="product__card__body">
        <p class="product__price">$US ${price}</p>
        <button class="product__delete">🗑️</button>
    </div>`;

        return card;
}

async function listaProductos () {
    const listaAPI = await conexionAPI.listaProductos();

    console.log(listaAPI);

    listaAPI.forEach(product => {
        console.log(product);
        lista.appendChild(createCard(product.id, product.name, product.price, product.image));
    });
};

listaProductos();
