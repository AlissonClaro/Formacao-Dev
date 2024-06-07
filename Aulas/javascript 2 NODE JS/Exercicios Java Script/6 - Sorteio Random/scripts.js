
function generateNumber() {
 
    const numMin = Math.ceil(document.querySelector('.input-min').value)
    const numMax = Math.floor(document.querySelector('.input-max').value)

    if (numMax <= numMin) {
        alert('O numero maximo é menor que o numero minimo ❌, tente outra vez ')        
    } 
    else {
    const result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    document.getElementById('result').textContent = 'O número sorteado é: ' + result +' 👈🏻';
    }
}