
function generateNumber() {
 
    const numMin = Math.ceil(document.querySelector('.input-min').value)
    const numMax = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    document.getElementById('result').textContent = 'O número sorteado é: ' + result +' 👈🏻';
}