/* 
    Filter 
        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array APENAS com os elementos filtrados
        - Aceita 3 parametros
            -item do array
            -index
            -array completo

            return true -> Item atual passa pro novo array
            retun false -> Item atual não passa pro novo array
*/

const list = [20, 3, 234, 12, 17, 451, 6, 87, 275, 1000]

const newList = list.filter((number) => {

    // tbm da pra fazer "const newList = list.filter((number) => number > 100"
    if (number < 100)
        return true
    else
        return false
})

console.log (newList)