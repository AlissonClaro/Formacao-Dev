let musica = document.querySelector('.audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

function tocarMusica() {
    console.log('musica');
    musica.play();

}