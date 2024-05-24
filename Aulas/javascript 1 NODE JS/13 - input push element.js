/* 
    document -> HTML

    getElementById -> Traz UM elemento pelo ID
    getElementByClassName -> Traz TODO os elemtnos com essa classe
    getElementByTagName -> Traz TODO os elemtnos com essa TAG
    getElementByName -> Traz TODO os elemtnos com essa Name

    querySelector -> Traz UM elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Traz TODO os elementos que econtrar.
 
*/
const input = document.querySelector("#main-input")

function cliqueiNoBotao () {
    alert("Botao clicado com sucesso")
}

function digiteiNoInput () {
    console.log(input.value)
}
