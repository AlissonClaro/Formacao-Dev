
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
    return {
        name: student.name, // o novo objeto vai ter um campo nome tbm no "name:"
        condition: student.testGrade >= 5 ? 'Aprovado' : 'Reprovado' //vai entrar no if de condição do aluno se a nota for igual ou maior que 5 Aprovado se não Reprovado
    }
})

console.log(passedList) //Vai exibir na tela o novo array da variavel passedList com os aprovados e reprovados
