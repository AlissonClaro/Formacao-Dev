/*

    Reduce
    - Retorna um valor ( pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parametros.
        -acumulador
        -valor atual
        -index
        -array completo
    */

       const cart = [
        {productName: 'Cape Nokia', price: 20.50, qtd: 10 },
        {productName: 'Cape Samsung', price: 25.30, qtd: 30 },
        {productName: 'Cape Redmi', price: 15.99, qtd: 20 },
        {productName: 'Cape Iphone', price: 50.00, qtd: 15 }
       ]

       const finalValue = cart.reduce((acc, value) => {
        return acc + (value.price * value.qtd)
       }, 0)

       console.log (`A sua compra de capas ficou no total de: R$ ${finalValue.toFixed(2)} reais`)