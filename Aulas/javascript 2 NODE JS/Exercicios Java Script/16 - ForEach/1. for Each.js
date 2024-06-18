/* 
ForEach(item, index, array)

users.forEach (function (item, i) {
    console.log (i)
    console.log (item)

})

*/

const users = [{ name: 'Rodolfo', age: 32, contact: '(14)99999-9999' },
    { name: 'Jaqueline', age: 20, contact: '(14)98888-88889' },
    { name: 'Lia', age: 25, contact: '(14)97777-7777' },
    { name: 'John', age: 31, contact: '(14)96666-6666' },
    { name: 'Roberto', age: 28, contact: '(14)95555-5555' },]

users.forEach (function (item, index) {
    console.log (`${index + 1} Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)

})