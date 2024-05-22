/*
1. Strings -> Textos.
2. Numbers -> Números.
3. Booleans -> Boleanos - ou é 0 ou 1 - Verdadeiro ou Falso
4.Objetcs - Objetos - 

OBs-> const deixa alterar um item interno das variaveis mas não completa apenas sub variaveis exemplo alisson.address."numeber"


const name = 'Alisson'
const Age = 34
const address = 'Voluntarios da patria'

*/



const alisson = {
    name: 'Alisson',
    age: 34,
    address: {
        street: 'Voluntarios da patria',
        number: 40,
        city: 'Marilia',
        state: 'São Paulo',
        country: 'Brasil',
     }
}

alisson.address.number = 41

console.log(alisson) //Traz a variavel dentro de alisson dentro de endereço dentro de Pais