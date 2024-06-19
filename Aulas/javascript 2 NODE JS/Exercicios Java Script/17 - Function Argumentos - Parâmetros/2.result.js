/* 
Calcular Desconto
Todos os Produtos acima de R$ 30,00 tem desconto de 10%

Claro! Vou explicar o código passo a passo:

Variáveis e Array:
    let value = 0: Inicializa uma variável chamada value com o valor zero.
    let finalValue = 0: Inicializa outra variável chamada finalValue com o valor zero.
    const cart = [30, 99, 2, 10, 150, 5, 8, 45, 19]: Cria um array chamado cart com os valores dos produtos.

Função calculateDiscount:
    Essa função calcula o desconto com base no preço original e na porcentagem de desconto fornecida.
    Ela recebe dois parâmetros: price (preço original do produto) e discount (porcentagem de desconto).
    Calcula o valor do desconto e retorna o resultado.

Loop forEach para calcular o valor final:
    O loop forEach percorre cada elemento do array cart.
    Se o valor do produto for maior que 30, ele calcula o desconto de 10% usando a função calculateDiscount e atualiza o finalValue.
    Caso contrário, apenas adiciona o valor do produto ao finalValue.

Cálculo do valor total sem desconto:
    Utiliza o método reduce para somar todos os valores do array cart.
    O resultado é armazenado na variável totalSemDesconto.

Cálculo do valor total com 10% de desconto:
    Calcula o desconto de 10% sobre o totalSemDesconto.
    Subtrai o desconto do total original para obter o totalComDesconto.

Exibição dos resultados:
    Os valores totais sem desconto e com desconto são exibidos no console



*/

let value = 0
let finalValue = 0
const cart = [30, 99, 2, 10, 150, 5, 8, 45, 19]

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValue = finalValue + (value - discount)
    } else {
        finalValue += value
    }
})

// Calculando o valor total dos produtos sem desconto
const totalSemDesconto = cart.reduce((acc, currentValue) => acc + currentValue, 0)
console.log(`Valor total sem desconto: R$ ${totalSemDesconto.toFixed(2)}`)

// Calculando o valor total com 10% de desconto
const desconto10 = calculateDiscount(totalSemDesconto, 10)
const totalComDesconto = totalSemDesconto - desconto10
console.log(`Valor total com 10% de desconto: R$ ${totalComDesconto.toFixed(2)}`)
