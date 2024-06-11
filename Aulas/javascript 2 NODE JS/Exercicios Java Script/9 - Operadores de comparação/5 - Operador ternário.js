
/* Operador Ternario

if (se)
else (se não)
Else if (se não se)
===============================
&& (if sem else)

const salary = 2000

salary < 3000 && console.log('Voce é um programador Junior')


================================

const salary = 3000
if(salary < 3000){
    console.log('Voce é um programador Junior')
}else {
    console.log('Voce é um programador Senior')
}

const salary = 3000 ? console.log('Voce é um programador Junior') : console.log('Voce é um programador Senior')
===================================

const salary = 3000
if(salary < 3000){
    console.log('Voce é um programador Junior')
}else if(salary >= 3000 && salary < 10000) {
    console.log('Voce é um programador Senior')
}else {
    console.log('Ele é diretor')
}

*/
const salary = 15000

salary < 3000 ? console.log('Voce é um programador Junior') : salary >= 3000 && salary < 10000 ? console.log('Ele é senior') : console.log('Ele é Diretor')
