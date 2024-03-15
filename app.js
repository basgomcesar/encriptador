const textoEncriptador = document.getElementById('mensaje');
const botonCopiarTexto = document.getElementById('copiar-texto');
const divEliminar = document.getElementById('texto-eliminar');
const vibrarDiv = document.getElementById('texto-final');
const auxiliarDiv = divEliminar.cloneNode(true); 

function encriptarTexto() {
    const texto = textoEncriptador.value;
    if (texto.trim() === '') {
        vibrarElemento();
    } else {
        mostrarTexto(encriptar(texto));
    }
}

function desencriptar() {
    const texto = textoEncriptador.value;
    if (texto.trim() === '') {
        vibrarElemento();
    } else {
        mostrarTexto(desencriptarTexto(texto));
    }
}

function mostrarTexto(texto) {
    limpiarElemento(divEliminar);
    botonCopiarTexto.style.display = 'inline-block';
    const div = document.createElement('textarea');
    estiliazarTexto(div);
    div.textContent = texto;
    divEliminar.appendChild(div);
}

function copiarTexto() {
    const texto = divEliminar.querySelector('textarea');
    texto.select();
    document.execCommand('copy');
}

function estiliazarTexto(div) {
    div.style.width = '90%';
    div.style.height = '17em';
    div.style.margin = '30px 0 0 0';
    div.style.outline = 'none';
    div.style.border = 'none';
    div.style.resize = 'none';
    div.style.fontFamily = 'Inter';
    div.style.fontSize = '20px';
    div.style.color = '#495057';
    div.style.backgroundColor = 'white';
    div.readOnly = true;
}

function vibrarElemento() {
    limpiarElemento(divEliminar);
    divEliminar.appendChild(auxiliarDiv.cloneNode(true));
    botonCopiarTexto.style.display = 'none';
    vibrarDiv.classList.add('vibrar');
    setTimeout(() => {
        vibrarDiv.classList.remove('vibrar');
    }, 400);
}

function limpiarElemento(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function encriptar(texto) {
    const mapeoEncriptacion = { 'e': 'enter', 'i': 'imes', 'o': 'ober', 'a': 'ai', 'u': 'ufat' };
    return texto.split('').map(c => mapeoEncriptacion[c] || c).join('');
}

function desencriptarTexto(texto) {
    const mapeoDesencriptacion = { 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ai': 'a', 'ufat': 'u' };
    return texto.replaceAll(/enter|imes|ober|ai|ufat/g, match => mapeoDesencriptacion[match]);
}
