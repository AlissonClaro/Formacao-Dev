/* THIS

this em ingles sifgnifica => este, esta, isto...

No JavaScript , o this faz referencia:

Node => module.exports
Web => windows

Escopo:
    => Global -> Quando começamos a escrever nossa aplicaçao
    N contexto global, o this faz referencia ao objeto global.
    que pe o projeto window no navegador de internet ou ao objeto global no Node.js.

    => Local -> Poer exemplo, dentro de uma funçao!
*/


const person = {
    name: "Alisson",
    age: 34,
    talk: function () {
        console.log(person.name)
    }
}

person.talk()


//talk serve para chamar conteudo das variaveis dentro de um const dentro da funçao 
//this.name tbm serve dentro da função porque esta na variavel global.
