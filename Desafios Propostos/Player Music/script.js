
let musica = document.querySelector('.audio');

function tocarMusica() {
    console.log('musica');
    musica.play();

}

document.querySelector('.botao-play').addEventListener('click', tocarMusica);