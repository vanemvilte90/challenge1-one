const inputText = document.querySelector(".input-text");
const mensaje = document.querySelector(".resultado");

// Encriptar

function btnEncriptar() {
    // Se valida el ingreso de texto
    if (inputText.value.length >= 4) {
        limpiar();
        mensaje.classList.add("texto-encriptado");
        // Se guarda el resultado de la función encriptar
        const textoEncriptado = encriptar(inputText.value);
        mensaje.value = textoEncriptado;
        mensaje.innerHTML = textoEncriptado;
        //Se muestra el botón copiar
        document.getElementById("btn-copiar").style.visibility = "visible";
    } else {
        alert("Debe ingresar un texto de 4 letras o más para encriptar.")
    }
}

function limpiar() {
    // Se limpian los mensajes iniciales de la caja resultado
    const limpiarCajaResultado = document.querySelector(".imagen");
    limpiarCajaResultado.classList.add("limpiar");
    const limpiarMensaje = document.querySelector(".mensaje-output");
    limpiarMensaje.classList.add("limpiar");
}

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //Se pasa el texto ingresado a minúsculas
    stringEncriptar = stringEncriptar.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

// Desencriptar

function btnDesencriptar() {
    // Se valida el ingreso de texto
    if (inputText.value.length >= 4) {
        limpiar();
        mensaje.classList.add("texto-encriptado");
        // Se guarda el resultado de la función desencriptar
        const textoDesencriptado = desencriptar(inputText.value);
        mensaje.value = textoDesencriptado;
        mensaje.innerHTML = textoDesencriptado;
        //Se muestra el botón copiar
        document.getElementById("btn-copiar").style.visibility = "visible";
    } else {
        alert("Debe ingresar un texto de 4 letras o más para desencriptar.")
    }
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    //Se pasa el texto ingresado a minúsculas
    stringDesencriptar = stringDesencriptar.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringDesencriptar;
}

// Copiar

function copiar() {
    var contenido = document.getElementById("texto").innerHTML;
    navigator.clipboard.writeText(contenido)
        .then(() => {
        alert("Texto copiado en el portapapeles.")
    });
}
