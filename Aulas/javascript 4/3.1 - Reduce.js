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
        {productName: 'Abobora', pricePerKg: 5, kg: 1 },
        {productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
        {productName: 'Limão', pricePerKg: 1.2, kg: 2 },
        {productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
        {productName: 'Morango', pricePerKg: 11.9, kg: 3 },
       ]

       const finalValue = cart.reduce((acc, value) => {
        return acc + (value.pricePerKg * value.kg)
       }, 0)

       console.log (`A sua compra ficou no total de: R$ ${finalValue.toFixed(2)} reais`)