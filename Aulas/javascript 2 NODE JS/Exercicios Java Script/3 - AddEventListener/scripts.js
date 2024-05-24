/* 

Eventos

select.addEventListener('change', function(){

    //Criado a função no function para avisar na tela que foi trocado
    console.log('Troquei o valor')

}) //Avisa quando o Valor Change é trocado 'change'





        Outro tipo de funçao no botao addEventListener

button.addEventListener('click', function(event){
    console.log(event)
}

    Outro tipo de code para evento change

    function troqueiValor(){ //faz a função de aparecer na tela o evento
    console.log("Troquei o valor")
}


input.addEventListener('change', troqueiValor) //chama o evento apos ser apertada uma tecla pelo 'keypress' e tem outros como 'click' e assim vai

*/

const input = document.querySelector('#mainInput')
const select = document.querySelector('select')
const button = document.querySelector('mainButton')

function troqueiValor(event){ //faz a função de aparecer na tela o evento
    console.log(event)
}


input.addEventListener('keypress', troqueiValor) //chama o evento apos ser apertada uma tecla pelo 'keypress' e tem outros como 'click' e assim vai