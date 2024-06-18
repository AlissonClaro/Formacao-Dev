/*
 let found = false
    do {
        for (const contact of contacts) {
            if (input.value.toLowerCase() === contact.name.toLowerCase()) {
                p.innerHTML = contact.name + ' - ' + contact.number
                return
            }
        }
        if (!found) {
            p.innerHTML = 'Contato não encontrado'
        }
    } while (!found)
}
*/

let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Rodolfo', number: '(14)99999-9999' },
    { name: 'Jaqueline', number: '(14)98888-88889' },
    { name: 'Lia', number: '(14)97777-7777' },
    { name: 'John', number: '(14)96666-6666' },
    { name: 'Roberto', number: '(14)95555-5555' }
];

function searchContact() {
    contacts.forEach(contact => {
        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = contact.name + ' - ' + contact.number
            return
        } else {
            p.innerHTML = 'Contato não encontrado'
        }
    })
    
}

//ERRO PROPOSITAL
