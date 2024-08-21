/* JSON - JavaScript Object Notation

-   Padrao de troca e armazenamento de informaçoes
-   Padrao logico simples
-   Leve para ser enviado e recebido
-   Simples e facil de entender
-   Derivado do JavaScript
-   Utiliza o formato chave / valor

*/

const user = {
        nome: "Plinio",
        idade:    31,
        filhos:   null,
        hobbies:  ["Codar", "Filmes", "Jogar", "Academia"],  
        casado: true,
        empresas: {
            devclub: {
                fundada: 2021,
                colaboradores: 40 
            },

            mosnter_app: {
                fundada: 2023,
                colaboradores: 4
            },

            atlas: {
                fundada: 2023,
                colaboradores: 5
            },

            agenda_sua: {
                fundada: 2020,
                colaboradores: 4
            }
        }
    }


    
    const userJson = JSON.stringify(user)
    
    const userJsonToJS = JSON.parse(userJson)
    console.log(userJsonToJS)