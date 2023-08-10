export function valida (input){
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid){
        input.parentElement.classList.remove("formcontato__input--invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = "";
    }
    else{
        input.parentElement.classList.add("formcontato__input--invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError ={
    nombre:{
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email:{
        valueMissing:"El campo correo no puede estar vacío",
        typeMismatch:"El correo no es válido",
    },
    asunto:{
        valueMissing: "El campo asunto no puede estar vacío",
    },
    mensaje:{
        valueMissing: "El campo mensaje no puede estar vacío",
    },
}; 

function mostrarMensajeDeError( tipoDeInput ,input) {
    let mensaje="";
    tipoDeErrores.forEach((error)=>{
        if (input.validity[error]){
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
};