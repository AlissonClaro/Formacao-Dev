
const list = [
    {name: 'Mario', vip: true},
    {name: 'Pedro', vip: false},
    {name: 'Matheus', vip: true},
    {name: 'Joao', vip: true},
    {name: 'Pablo', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Bia', vip: false},
]

const newList = list.map( user => {
    
    return {
        name: user.name, 
        braceletColor: user.vip ? 'black' : 'green' // if se a user.vip for true = vip pulseira ['black'] se não é ['green']
        //O "Vip" vai ser substituido por braceletColor: + color
    }
})

console.log(newList)