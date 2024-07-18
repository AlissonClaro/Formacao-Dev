
const students = [
    { name: 'Mario', testGrade: 7 },
    { name: 'Pedro', testGrade: 5 },
    { name: 'Matheus', testGrade: 8 },
    { name: 'Joao', testGrade: 9 },
    { name: 'Pablo', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Bia', testGrade: 10 },
]

const passedList = students.map(student => { // ele vai percorrer o array estudantes e ver o valor da nota para entrar no if
    let condition // Declarando a variavel condição do aluno

    if (student.testGrade >= 5) {
        // se a condição do aluno for nota maior ou igual a 5 ele passou.
        condition = 'Aprovado'
    } else {
        // se a condição do aluno for nota menor que 5 ele reprovou.
        condition = 'Reprovado'
    }

    const newStudent = { // Aqui a variavel vai ser mudada vai ser setada para cada aluno percorrido com o if e vai 
        //reescrever se ele passou ou não em outro array
        name: student.name, // o novo objeto vai ter um campo nome tbm no "name:"
        condition: condition //o novo objeto condition vai receber o valor da condição se foi Aprovado ou Reprovado para exibir no array
    }

    return newStudent; // Retorna o novo object
})

console.log(passedList) //Vai exibir na tela o novo array da variavel passedList com os aprovados e reprovados
