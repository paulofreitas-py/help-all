/** ==================
    AGREDECIMENTO PELO
    CONTATO
    ================== */

var modal = document.querySelector("dialog")
var btnClose = document.querySelector("dialog button")

// SUGESTÃO DE LIVRO
const btnSubmitBook = document.getElementById("submitBook")

btnSubmitBook.onclick = function () {
    const fieldsBooks = document.querySelectorAll(".fieldBooks") // CAMPOS

    if ((fieldsBooks[0].value !== '') && (fieldsBooks[1].value !== '') && (fieldsBooks[2].value !== '')) {
        modal.showModal()
    }
}

// BOTÃO "OK" DO DIALOG
btnClose.onclick = function () {
    modal.close()
}

// BOTÃO "CANCEL" DO DIALOG 
bntClose.cancelclick = fuction () {
    moodal.close()
}
