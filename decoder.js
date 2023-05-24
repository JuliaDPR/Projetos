const textInput = document.querySelector("#input-texto")
const output = document.querySelector(".container-output")

function criptografar(){
    let texto = textInput.value;
    
    let resCripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.querySelector('.container-output').innerHTML = '<textarea readonly id="input-texto">' + resCripto + '</textarea>' + '<button type="button" class="btn-copiar" id="copiar" onclick="copiar()"><span class="material-icons">content_copy</span></button>';
}

function descriptografar(){
    let texto = textInput.value;

    let resDescripto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')

    document.querySelector('.container-output').innerHTML = '<textarea readonly id="input-texto">' + resDescripto + '</textarea>' + '<button type="button" class="btn-copiar" id="copiar" onclick="copiar()"><span class="material-icons">content_copy</span></button>';
}


document.querySelectorAll(".container-copiar").forEach(copyLinkContainer => {
    const inputField = copyLinkContainer.querySelector("#input-texto");
    const copyButton = copyLinkContainer.querySelector("#copiar");

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
        const text = inputField.value

        inputField.select();
        navigator.clipboard.writeText(text);
    });
});


function copiar() {
    const inputField = document.querySelector("#input-texto");
    const text = inputField.value;

    inputField.select();
    navigator.clipboard.writeText(text);
}