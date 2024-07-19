const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Yun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim cook', fundedOn: 1976 }
]

// Adicionar 10% de valor de mercado a todos as companhias -> Map
// Filtrar somente companhias fundadas abaixo de 1990 -> filters
// Somar o valor de mercado das companhias restantes -> Reduce

const filteredCompanies = companies.map(company => {
    company.marketValue = company.marketValue + company.marketValue * 0.10
    return company
}).filter((company) => company.fundedOn < 1990).reduce((acc, company) => acc + company.marketValue, 0)

console.log(`A soma total de todas as empresas é de: R$ ${filteredCompanies} bilhões de reais`)
