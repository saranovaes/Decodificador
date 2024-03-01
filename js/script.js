const criptografar = document.getElementById("botton__criptografar");
const descriptografar = document.getElementById("botton__descriptografar");
const copy = document.getElementById("botton__copiar");
const textoInicial = document.getElementById("textInput");
const textFinal = document.getElementById("textoNaoEncontrado");
const menino = document.getElementById("img__menino");
const textInfo = document.getElementById("texto__info");
const rigth = document.getElementById("conteudo__right");

const remplace = (newvalue) => {
    textFinal.innerHTML = newvalue;
    textFinal.classList.add("ajustar");
    rigth.classList.add("ajuste");
    textoInicial.value = "";
    textoInicial.style.height = "auto";
    textoInicial.placeholder = "Digite seu texto aqui";
    menino.classList.add("ocultar");
    textInfo.classList.add("ocultar");
    copy.classList.remove("bn_ocultar");
};

const reset = () => {
    textoInicial.value = "";
    textoInicial.style.height = "auto";
    textFinal.innerHTML = "";
    rigth.classList.remove("ajuste");
    textFinal.classList.remove("ajustar");
    menino.classList.remove("ocultar");
    textFinal.placeholder = "Nenhuma mensagem encontrada";
    textInfo.classList.remove("ocultar");
    copy.classList.add("bn_ocultar");
    textoInicial.focus();
};

let replace = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

criptografar.addEventListener("click", () => {
    const texto = textoInicial.value.toLowerCase();

    if (texto != "") {
        function encript(newtext) {
            for (let i = 0; i < replace.length; i++) {
                if (newtext.includes(replace[i][0])) {
                    newtext = newtext.replaceAll(replace[i][0], replace[i][1]);
                }
            }
            return newtext;
        }
        remplace(encript(texto));
    } else {
        alert("Digite o texto para criptografar");
        reset();
    }
});

descriptografar.addEventListener("click", () => {
    const texto = textoInicial.value.toLowerCase();

    if (texto != "") {
        function desencript(newtext) {
            for (let i = 0; i < replace.length; i++) {
                if (newtext.includes(replace[i][1])) {
                    newtext = newtext.replaceAll(replace[i][1], replace[i][0]);
                }
            }
            return newtext;
        }
        remplace(desencript(texto));
    } else {
        alert("Digite o texto para Descriptografar");
        reset();
    }
});
copy.addEventListener("click", () => {
    let texto = textFinal;
    texto.select();
    document.execCommand("copy");

    alert("Texto Copiado");
    reset();
});
//auto ajuste de textarea
textoInicial.addEventListener("change", (e) => {
    textoInicial.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", (e) => {
    textoInicial.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textoInicial.style.height = `${scHeight}px`;
});
