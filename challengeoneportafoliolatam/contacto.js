
const listaContactos = () => fetch ("http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

const crearContacto = (nombre, email,asunto,mensaje)=>{
    return fetch ("http://localhost:3000/perfil",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({nombre,email,asunto,mensaje,id:uuid.v4()}),
    }); 
}; 
const detalleContacto =(id)=>{
    return fetch (`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};
export const contactoService ={
    listaContactos,
    crearContacto,
    detalleContacto,
};