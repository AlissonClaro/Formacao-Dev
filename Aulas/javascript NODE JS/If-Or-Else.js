/*

if or else -> controladores de fluxo

Controlador de Fluxo
    - IF(Se) -> Faça ISSO
    - Else (Se não) -> Se não faça isso.

Operadores de comparação
    > maior que
    < menor que
    == igual a

*/

const notaDoAluno = 4 // a condição muida conforme voce muda o valor da variavel no exercicio proposto.
const notaDeCorte = 5


if(notaDoAluno > notaDeCorte) {
    //o que sera exexutado se o IF for verdadeiro
 console.log(`Parabens voce passou de ano nota ${notaDoAluno}`)
 
}
 else {
    //o que sera exexutado se o IF for falso
    console.log(`Você foi reprovado com a nota: ${notaDoAluno}`)
 }
