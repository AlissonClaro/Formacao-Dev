
// Map - mapeia o array

//     -Cria um novo array a partir do array percorrido (array original)
// const number = [1, 2, 3, 4, 5, 6, 7]
// const duble = number.map( (item, index, arrayOriginal) => {
//     console.log(item + ' -> item')
//     console.log(index + ' -> index')
//     console.log(arrayOriginal + ' -> arrayOriginal')

//     return item * 2 //so vai jogar na variavel (array) o que estiver no return.
// })
// console.log(number)
// console.log(duble)


//     -Cria um novo array com a mesma quantidade de itens do array original
//     -Aceita 3 parametros
//         -item do array
//         -index
//         -array completo
//     -Retorna um novo array

const number = [1, 2, 3, 4, 5, 6, 7]
const duble = number.map((item) => item - 1)

console.log(number)
console.log(duble)