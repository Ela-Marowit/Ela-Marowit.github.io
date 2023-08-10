//Haz tú validación en javascript acá
import {contactoService} from "./contacto.js"

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    const asunto = document.querySelector("[data-asunto]").value;
    const mensaje = document.querySelector("[data-mensaje]").value;
    contactoService
        .crearContacto(nombre,email,asunto,mensaje)
		.then (()=>{
			window.location.href ="./index.html";
		})
		.catch(err =>console.log(err))
    })
	
