let textoEncriptador = document.getElementById('mensaje');
let botonCopiarTexto = document.getElementById('copiar-texto');
let divEliminar = document.getElementById('texto-eliminar');

function encriptarTexto() {
    let texto = textoEncriptador.value;
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'e') {
            textoEncriptado += 'enter';
        } else if (texto[i] === 'i') {
            textoEncriptado += 'imes';
        } else if (texto[i] === 'o') {
            textoEncriptado += 'ober';
        } else if (texto[i] === 'a') {
            textoEncriptado += 'ai';
        } else if (texto[i] === 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += texto[i];
        }
    }
    textoEncriptador.value = textoEncriptado;
    mostrarTexto(textoEncriptado);
}
function desencriptar() {
    let texto = textoEncriptador.value;
    let textoDesencriptado = '';
    textoDesencriptado = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ai', 'a').replaceAll('ufat', 'u');
    textoEncriptador.value = textoDesencriptado;
    mostrarTexto(textoDesencriptado);
}
function mostrarTexto(texto) {
    divEliminar.innerHTML = '';
    botonCopiarTexto.style.display = 'inline-block';
    let div = document.createElement('textarea');
    estiliazarTexto(div);
    div.innerHTML = texto;
    divEliminar.appendChild(div);

}
function copiarTexto() {
    let texto = divEliminar.querySelector('textarea');
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