/*

    Reduce
    - Retorna um valor ( pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parametros.
        -acumulador
        -valor atual
        -index
        -array completo
    */

        const list = [ 1, 2, 3, 4, 5, 6, 7]

        const sum = list.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual
        }, 0)

        const companies = [
            {name: 'Samsung', marketValue: 50, CEO: 'Kim Yun Suk', fundedOn: 1938},
            {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975},
            {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968},
            {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004},
            {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2011},
            {name: 'Apple', marketValue: 845, CEO: 'Tim cook', fundedOn: 1976}
        ]

        const marketValue = companies.reduce((acumulador, value) =>{
            return acumulador + value.marketValue
        }, 0)

        console.log(marketValue)
