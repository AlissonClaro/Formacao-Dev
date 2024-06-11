/*

Operadores type of e delete

typeof -> Tipo de dados
delete

=============================

    const myObject ={ 
        nome: 'Alisson',
        age: 30,
        address: 'Rua Isso, n40'
    }


    console.log(typeof myObject)

===============================

Delete

    const myObject ={ 
        nome: 'Alisson',
        age: 30,
        address: 'Rua Isso, n40'
    }
    delete myObject.age

    console.log(myObject)



*/

const myObject ={ 
    nome: 'Alisson',
    age: 30,
    address: 'Rua Isso, n40'
}
delete myObject.age

console.log(myObject)
