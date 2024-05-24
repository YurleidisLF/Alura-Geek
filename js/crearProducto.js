import { conexionAPI } from "./conexionAPI.js";

const form = document.querySelector("[data-form]");

async function createProduct(event){

    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
    
    try {
        await conexionAPI.enviarProducto(name, price, image);
        window.location.reload()
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', event => {
        createProduct(event)
        
});