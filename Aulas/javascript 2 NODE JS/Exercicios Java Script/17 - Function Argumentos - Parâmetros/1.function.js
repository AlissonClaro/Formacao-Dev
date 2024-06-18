/*
Functions / Funções

    Trecho de codigo que é executado
    SOMENTE quando solicitado ( Parente gente boa)


    function nomeNaTela(name = 'Campo em branco') { - recebe por padrao esta variavel caso nao tenha nada
        console.log(`o nome é: ${name}`)
    }

    nomeNaTela('Andre') - ESSA FUNÇÃO PEGA ESTE NOME E JOGA NA FUNÇAO PARA APRESENTAR NA TELA ANDRE

*/

function sum(value1, value2) {
    console.log(value1 + value2)
}

sum(20, 30)
sum(10, 20)

function sub(value1, value2) {
    console.log(value1 - value2)
}

sub(20, 30)
sub(10, 20)

function mult(value1, value2) {
    console.log(value1 * value2)
}

mult(20, 30)
mult(10, 20)

function rest(value1, value2) {
    console.log(value1 % value2)
}

rest(20, 30)
rest(10, 20)

function div(value1, value2) {
    console.log(value1 / value2)
}

div(20, 30)
div(10, 20)

function pow(value1, value2) {
    console.log(value1 ** value2)
}

pow(20, 30)
pow(10, 20)

function sqrt(value1, value2) {
    console.log(Math.sqrt(value1, value2))
}

sqrt(20, 30)
sqrt(10, 20) 

function round(value1, value2) {
    console.log(Math.round(value1, value2))
}

round(20, 30)
round(10, 20)