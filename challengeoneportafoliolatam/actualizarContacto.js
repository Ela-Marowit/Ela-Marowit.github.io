import { contacto } from "./contacto";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async() =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null){
        window.location.href = "";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    const asunto = document.querySelector("[data-asunto]");
    const mensaje = document.querySelector("[data-mensaje]");

    try{
        const perfil = await contacto.detalleCliente(id);
        if (perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
            asunto.value = perfil.asunto;
            mensaje.value = perfil.mensaje;
        } else {
            throw new Error();
        }
    } catch(error){
        window.location.href="";
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    const asunto = document.querySelector("[data-asunto]").value;
    const mensaje = document.querySelector("[data-mensaje]").value;

    contacto.actualizarContacto(nombre, email, id, asunto, mensaje).then(()=>{
        window.location.href= "";
    })

});