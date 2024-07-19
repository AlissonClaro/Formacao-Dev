/* Arrays 

    - push --> Adiciona mais um item ao array
        let myArray = [1, 2, 3]

        myArray.push(4)
        myArray.push(5)

        console.log(myArray)


    - lenght --> Mostra o tamanho do array
        let myArray = [1, 2, 3]

        console.log(myArray.length)


    - sort --> Organiza o array
        let myArray = [3, 2, 1]

        myArray.sort()
        console.log(myArray)


    - delete --> Deleta o item de uma posição do Array
        let myArray = ['abacate', 'limao', 'tangerina']

        delete myArray[0]
        console.log(myArray)


    - every --> Esse metodo testa se todos os elementos do Array passam em uma condilçao.
        const users = [
        { name:'Fabio', credit: 600 },
        { name:'Lis', credit: 900 },
        { name:'Fabiana', credit: 300 },
        { name:'Jose', credit: 200 }
        ]

        const isTrue = users.every(user => user.credit > 300)
        console.log(isTrue)


    - some --> O .some() faz algo parecido com o .every(). A diferença é o .every()
        const users = [
        { name:'Fabio', credit: 600 },
        { name:'Lis', credit: 900 },
        { name:'Fabiana', credit: 300 },
        { name:'Jose', credit: 200 }
        ]

        const isTrue = users.some(user => user.credit > 800)
        console.log(isTrue)


    - fill --> Preenche posicoes do array como desejarmos
        let numbers = [1, 2, 3, 4]

        numbers.fill('abacate', 0, 2)
        console.log(numbers)


    - find --> Usamos esse metodo quando queremos encontrar algum elemento dentro no Array
        const users = [
        { name:'Fabio', credit: 600 },
        { name:'Lis', credit: 900 },
        { name:'Fabiana', credit: 300 },
        { name:'Jose', credit: 200 }
        ]

        const finUser = users.find(user => user.name === 'Jose')
        console.log(finUser)


    - findIndex --> Faz o mesmo que o .find(), mas retorna o indice do elemento encontrado ao inves de retornar o proprio elemento
        const users = [
        { name:'Fabio', credit: 600 },
        { name:'Lis', credit: 900 },
        { name:'Fabiana', credit: 300 },
        { name:'Jose', credit: 200 }
        ]

        const finUser = users.findIndex(user => user.name === 'Jose')
        console.log(finUser)


    - concat() -->
        const array1 = ['a', 'b', 'c'];
        const array2 = ['d', 'e', 'f'];
        const array3 = array1.concat(array2);

        console.log(array3);
        // ['a', 'b', 'c', 'd', 'e', 'f']


    - includes ->
        const array1 = [1, 2, 3];

        console.log(array1.includes(2));
        // true

        const pets = ['cat', 'dog', 'bat'];

        console.log(pets.includes('cat'));
        // true

        console.log(pets.includes('at'));
        // false


    - join ->
        const elements = ['Fire', 'Air', 'Water'];

        console.log(elements.join());
        // "Fire,Air,Water"

        console.log(elements.join(''));
        // "FireAirWater"

        console.log(elements.join(' '));
        // "Fire Air Water"

        console.log(elements.join('-'));
        // "Fire-Air-Water"


    - slice(fatiar)
        1) Posição do array da qual vamos começar a pegar as informações 
		para criar o novo array
	    2) Posição final do array que vamos pegar os dados

        1) Posição do array da qual vamos começar a pegar as informações 
		para criar o novo array

	    2) Posição final do array que vamos pegar os dados

        const users = ["João", "Maria", "Pedro", "Michele", "Fernando"];

        console.log(users.slice(2));
        // ["Pedro", "Michele", "Fernando"];

        console.log(users.slice(2, 4));
        // [ "Pedro", "Michele" ];

        console.log(users.slice(1, 6));
        // ["Maria", "Pedro", "Michele", "Fernando"];


        console.log(users.slice());
        // ["João", "Maria", "Pedro", "Michele", "Fernando"];


    - splice ->
        1) Posição do array da qual vamos começar a tirar as informações 
	    2) Quantos elementos eu quero retirar a partir da posição inicial 
	    3) Item que você quer adicionar

        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];

        months.splice(1, 0, 'Feb');
        // [ 'Jan', 'Feb', 'Fev', 'Mar', 'Abr', 'Mai' ];


        months.splice(1, 4, 'May');
        // [ 'Jan', 'May' ]


    - pop ->
        const array1 = [1, 2, 3];

        const lastElement = array1.pop();

        console.log(array1);
        // [1, 2]

        console.log(lastElement);
        // 3


    - shift ->
        const array1 = [1, 2, 3];

        const firstElement = array1.shift();

        console.log(array1);
        // [2, 3]

        console.log(firstElement);
        // 1

*/



const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// "Fire,Air,Water"

console.log(elements.join(''));
// "FireAirWater"

console.log(elements.join(' '));
// "Fire Air Water"

console.log(elements.join('-'));
// "Fire-Air-Water"