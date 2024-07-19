const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Yun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim cook', fundedOn: 1976 }
]

// Subtrair 10% de valor de mercado a todos as companhias -> Map
// Filtrar somente companhias fundadas depois de 1980 -> filters
// Somar o valor de mercado das restantes -> Reduce

const sub10Percent = company => {
    company.marketValue = company.marketValue - company.marketValue * 0.10
    return company
}

const filterCompanies = (company) => company.fundedOn > 1980

const calculateAllCompanies = (acc, company) => acc + company.marketValue

const filteredCompanies = companies
    .map(sub10Percent)
    .filter(filterCompanies)
    .reduce(calculateAllCompanies, 0)

console.log(`A soma total de todas as empresas é de: R$ ${filteredCompanies} milhões de reais`)
