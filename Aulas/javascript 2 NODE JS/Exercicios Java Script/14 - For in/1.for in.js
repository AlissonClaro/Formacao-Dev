/* 
Estrutura de repetição - Loop
For in

const users = {name: 'Alisson', age: 34, address: 'Rua Sei la'}
console.log(users.name)

console.log(users.name) - mostram o nome a msm coisa
console.log(users['name'])

}*/


const users = {name: 'Alisson', age: 34, address: 'Rua Sei la', number: 40}
for (const key in users) {
    //console.log(key + ': ' + users[key]) faz a mesma função do debaixo
    console.log(`${key}: ${users[key]}`)
}



