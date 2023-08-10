import {contacto} from "./contacto.js"

const crearNuevaLinea = (nombre, email,id,asunto,mensaje) => {
    const linea = document.createElement("input");
    const contenido = ` 
            <input class="formcontato__input">${nombre}>
            <input>${email}>
            <input>${asunto}>
            <textarea>${mensaje}></textarea>
     `
    linea.innerHTML = contenido;
    const btn =linea.querySelector("formcontato__enviar");//button
    btn.addEventListener("click",() => {
      const id = btn.id;
      contacto
      .then((respuesta)=>{
        console.log(respuesta);
      })
      .catch((error)=>alert("Ocurrio un error"));
    });
    return linea;
};

const table = document.querySelector("[data-table]")

contacto.listaContactos()
  .then((data)=>{
    data.forEach(({nombre,email,id,asunto,mensaje}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id,asunto,mensaje);
        table.appendChild(nuevaLinea);
    });
  })  
  .catch((error) => alert("Ocurrió un Error"));
