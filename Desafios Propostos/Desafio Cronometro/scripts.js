let number = 0
let cron
let h1 = document.querySelector('h1')

function start() {
    let milissegundos = 0
    let segundos = 0
    let minutos = 0
    let h1 = document.querySelector('h1')

    cron = setInterval(function () {
        milissegundos += 10 // Incrementa 10 milésimos de segundo

        if (milissegundos === 1000) {
            milissegundos = 0
            segundos++; // Incrementa 1 segundo
        }

        if (segundos === 60) {
            segundos = 0
            minutos++; // Incrementa 1 minuto
        }

        // Formata a saída para mostrar dois dígitos
        let m = minutos.toString().padStart(2, '0');
        let s = segundos.toString().padStart(2, '0');
        let ms = milissegundos.toString().padStart(2, '0');

        h1.innerHTML = `${m}:${s}:${ms}`;
    }, 10); // Atualiza a cada 10 milésimos de segundo
}

function stop() {
    clearInterval(cron)
}

function zerar() {
    stop() // Para o cronômetro
    number = 0 // Zera o número
    h1.innerHTML = number // Atualiza o conteúdo de h1
    h1.innerHTML = '00:00:00'
}

//1000 milisegundos é igual a 1 seg.