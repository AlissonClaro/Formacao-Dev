const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Yun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim cook', fundedOn: 1976 }
]

const newCompanies = companies.filter((company) => {
    if (company.marketValue < 200 && company.fundedOn > 1990) return true
    else return false
})

console.log(newCompanies)