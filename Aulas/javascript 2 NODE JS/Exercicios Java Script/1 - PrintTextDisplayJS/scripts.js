/* 
    document -> HTML

    getElementById -> Traz UM elemento pelo ID
    getElementByClassName -> Traz TODO os elemtnos com essa classe
    getElementByTagName -> Traz TODO os elemtnos com essa TAG
    getElementByName -> Traz TODO os elemtnos com essa Name

    querySelector -> Traz UM elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Traz TODO os elementos que econtrar.
 
*/
const input = document.querySelector("#mainInput")

function cliqueiNoBotao () { //quando voce clica no botao 
    
    //Paga o valor do input
    const valorInput = document.getElementById('mainInput').value

    //Coloca o valor do input no elemento 'resultado'
    document.getElementById('resultado').textContent = valorInput

    // Limpa o valor do input
    document.getElementById('mainInput').value = '';
        
}

