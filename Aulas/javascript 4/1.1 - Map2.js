
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
    let braceletColor

    if (user.vip) {
        braceletColor = 'black'
    } else {
        braceletColor = 'green'
    }

    const newUser = {
        name: user.name, 
        braceletColor: braceletColor
    }

    return newUser
})


console.log(newList)