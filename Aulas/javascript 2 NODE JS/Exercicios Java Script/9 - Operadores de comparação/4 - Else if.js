
/*
if (se)
else (se não)
Else if (se não se)

*/

const temperature = 41

if (temperature === 36) {
    console.log('Voce esta saudavel')
} else if (temperature > 36 && temperature <= 40) {
    console.log('Voce esta com febre')
} else if (temperature > 40) {
    console.log('Voce esta com MUITA febre')
}
else {
    console.log('Voce esta com hipotermia!')
}