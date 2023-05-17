const txt_principal = document.getElementById("caixa_principal");
const txt_secundario = document.querySelector(".caixa_secundaria");
const divImg = document.getElementById("div_img");

function btnCrip() {
    txt_secundario.value = criptografar(((txt_principal).value).toLowerCase())

    if ((txt_principal.value) != "") {
        divImg.style.display = "none"
    } else {
        divImg.style.display = "block"
    }

}

function btnDecrip() {
    txt_secundario.value = descriptografar(((txt_principal).value).toLowerCase())

    if ((txt_principal.value) != "") {
        divImg.style.display = "none"
    } else {
        divImg.style.display = "block"
    }
}

function copiar() {
    txt_secundario.select()
    document.execCommand("copy")

    if ((txt_principal.value) != "") {
        divImg.style.display = "none"
    } else {
        divImg.style.display = "block"
    }

    txt_principal.select()
}


function criptografar(str) {
    // As "chaves" de criptografia que utilizaremos são:
    // A letra "e" é convertida para "enter"
    // A letra "i" é convertida para "imes"
    // A letra "a" é convertida para "ai"
    // A letra "o" é convertida para "ober"
    // A letra "u" é convertida para "ufat"
    const list_chave1 = ["a", "e", "i", "o", "u"]
    const list_chave2 = ["aI", "entEr", "imEs", "obEr", "ufAt"]
    for (var i = 0; i < list_chave1.length; i++) {
        if (str.includes(list_chave1[i]))
            str = str.replaceAll(list_chave1[i], list_chave2[i])
    }
    return str.toLowerCase()

}

function descriptografar(str) {
    const list_chave1 = ["a", "e", "i", "o", "u"]
    const list_chave2 = ["ai", "enter", "imes", "ober", "ufat"]
    for (var i = 0; i < list_chave2.length; i++) {
        if (str.includes(list_chave2[i]))
            str = str.replaceAll(list_chave2[i], list_chave1[i])
    }
    return str.toLowerCase()
}

function imgDisplayNone() {
    divImg.style.display = "none"
}

function imgDisplayBlock() {
    if ((txt_secundario.value) != "") {
        divImg.style.display = "none"
    } else {
        divImg.style.display = "block"
    }
}