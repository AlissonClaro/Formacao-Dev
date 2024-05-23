/* 
    document -> HTML

    getElementById -> Traz UM elemento pelo ID
    getElementByClassName -> Traz TODO os elemtnos com essa classe
    getElementByTagName -> Traz TODO os elemtnos com essa TAG
    getElementByName -> Traz TODO os elemtnos com essa Name

    querySelector -> Traz UM elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Traz TODO os elementos que econtrar.
 


const input = document.getElementById('main-input') //Id so retorna 1 elemento por ser unico.

console.log(input)




const elements = document.getElementsByClassName('paragraph-js')

console.log(elements)



const elements = document.getElementsByTagName('p')

console.log(elements)



const elements = document.getElementsByName('nome-completo')

console.log(elements)



const elements = document.querySelector('.paragraph-js')


const elements = document.querySelector('#main-input')


const elements = document.querySelector('button.main-button')

console.log(elements)



const elements = document.querySelectorAll('p')

console.log(elements)

*/

const element = document.querySelector('#main-input')

//element.placeholder = "Agora é esse texto"

element.value = 454545

console.log(element)