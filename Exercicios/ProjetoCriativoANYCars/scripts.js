let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let containerSec = document.querySelector('.containersec')
let items = containerSec.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 // automatização de posição length pega o conjunto de posições e o -1 deixa ele na ultima posição da lista inteira.

function setSlider() {
    let itemOld = containerSec.querySelector('.list .item.active')
    itemOld.classList.remove('active')
}

function contSlider() {
    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
}
nextButton.onclick = () => {
    setSlider()
    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')
    // todos items[classe active].chamaClasse.Adiciona('o active')
    contSlider()
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

}

prevButton.onclick = () => {
    setSlider()
    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')
    // Adicionando a atualização da classe 'active' para os pontos
    contSlider()
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

}

