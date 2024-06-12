const contacts = [{ name: 'Rodolfo', number: '(14)99999-9999' },
{ name: 'Jaqueline', number: '(14)98888-88889' },
{ name: 'Lia', number: '(14)97777-7777' },
{ name: 'John', number: '(14)96666-6666' },
{ name: 'Roberto', number: '(14)95555-5555' },
]

function searchContact() {
    // Código de busca aqui
    const input = document.getElementById('searchInput').value.toLowerCase();
    const result = contacts.find(contact => contact.name.toLowerCase() === input || contact.number === input);
    const resultElement = document.querySelector('.result');
    if (result) {
        resultElement.textContent = result.name + ' - ' + result.number;
        resultElement.classList.remove('not-found');
    } else {
        resultElement.textContent = 'Contato não encontrado';
        resultElement.classList.add('not-found');
    }
}