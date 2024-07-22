
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.btn-map')
const buttonSumAll = document.querySelector('.btn-reduce')
const buttonFilter = document.querySelector('.btn-filter')

function formatCurrency(value) {
        const attValue = value.toLocaleString('pt-BR', 
        { style: 'currency', 
        currency: 'BRL' })
        return attValue
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency (product.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

function funcMapAll() {
    const newPrices = menuOptions.map((product) => ({
        //Spread Operator
        ...product,
        price: product.price * 0.9, //10% de desconto
    }))

    showAll(newPrices)
}

function SumAllItems() {
    const sumPrices = menuOptions.reduce((acc, currencyValue) => acc + currencyValue.price, 0)

    list.innerHTML = `
        <li>
            <p>Total dos items é de: <br>R$ ${formatCurrency (sumPrices)}</p>
        </li>
        `
}

function filterAllItems() {

    const filterItemVegan = menuOptions.filter((product) => {
        if (product.vegan) {
            return product
        } else {
            return false
        }
    })

    showAll(filterItemVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions)) //colocar uma função vazia no evento faz com que ele não inicie quando a pagina for carregada apenas quando ele é clicado.
buttonMapAll.addEventListener('click', funcMapAll)
buttonSumAll.addEventListener('click', SumAllItems)
buttonFilter.addEventListener('click', filterAllItems)

