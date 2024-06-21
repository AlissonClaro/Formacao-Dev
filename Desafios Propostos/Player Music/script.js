
let music = [
    {titulo:'Alienígena (Original Mix) ft. Alien Code ', artista:'Chapeleiro', src:'./music/Alienígena (Original Mix) ft. Alien Code - Chapeleiro.mp3', img:'./resource/img-1.jgp'},
    {titulo:'Astronaut In The Ocean ft. dksh & Citycreed', artista:'SLAP HOUSE MAFIA', src:'./music/Astronaut In The Ocean ft. dksh & Citycreed - SLAP HOUSE MAFIA.mp3', img:'./resource/img-2.jgp'},
    {titulo:'Balance ft. Malive', artista:'Illusionize', src:'./music/Balance ft. Malive - Illusionize.mp3', img:'./resource/img-3.jpg'},
    {titulo:'Beat Du Mau (Original Mix) ft. Draco', artista:'Chapeleiro', src:'./music/Beat Du Mau (Original Mix) ft. Draco - Chapeleiro.mp3', img:'./resource/img-4.jpg'},
    {titulo:'Bounce (Original Mix) ft. Diamn', artista:'Illusionize', src:'./music/Bounce (Original Mix) ft. Diamn - Illusionize.mp3', img:'./resource/img-5.jpg'},
    {titulo:'Cash', artista:'SLAP HOUSE MAFIA', src:'./music/Cash - SLAP HOUSE MAFIA.mp3', img:'./resource/img-6.jpg'},
    {titulo:'Catch Me If You Can', artista:'SLAP HOUSE MAFIA', src:'./music/Catch Me If You Can - SLAP HOUSE MAFIA.mp3', img:'./resource/img-1.jpg'},
    {titulo:'Conexões Orgânicas', artista:'Illusionize', src:'./music/Conexões Orgânicas - Illusionize.mp3', img:'./resource/img-2.jpg'},
    {titulo:'Damello ft. Sterium & Emy Perez', artista:'Illusionize', src:'./music/Damello ft. Sterium & Emy Perez - Illusionize.mp3', img:'./resource/img-3.jpg'},
    {titulo:'Digital Viewpoints', artista:'Reflection', src:'./music/Digital Viewpoints - Reflection.mp3', img:'./resource/img-4.jpg'},
    {titulo:'Falling (Original Mix) ft. Breaking Beattz', artista:'Illusionize', src:'./music/Falling (Original Mix) ft. Breaking Beattz - Illusionize.mp3', img:'./resource/img-5.jpg'},
    {titulo:'Groove (Original Mix) ft. Synthatic', artista:'Chapeleiro', src:'./music/Groove (Original Mix) ft. Synthatic - Chapeleiro.mp3', img:'./resource/img-6.jpg'},
    {titulo:'Keep On Dancing ft. Ashibah', artista:'Illusionize', src:'./music/Keep On Dancing ft. Ashibah - Illusionize.mp3', img:'./resource/img-1.jpg'},
    {titulo:'Mantra (Original Mix)', artista:'Chapeleiro', src:'./music/Mantra (Original Mix) - Chapeleiro.mp3', img:'./resource/img-2.jpg'},
    {titulo:'Medo (Original Mix)', artista:'Chapeleiro', src:'./music/Medo (Original Mix) - Chapeleiro.mp3', img:'./resource/img-3.jpg'},
    {titulo:'Multiverso (Original Mix) ft. Freakaholics', artista:'Chapeleiro', src:'./music/Multiverso (Original Mix) ft. Freakaholics - Chapeleiro.mp3', img:'./resource/img-4.jpg'},
    {titulo:'Payiz ft. Dia & Emty', artista:'Liu', src:'./music/Payiz ft. Dia & Emty - Liu.mp3', img:'./resource/img-5.jpg'},
    {titulo:'Phoneline (Original Mix) ft. Visage Music', artista:'Illusionize', src:'./music/Phoneline (Original Mix) ft. Visage Music - Illusionize.mp3', img:'./resource/img-6.jpg'},
    {titulo:'Pullin Up ft. dksh', artista:'SLAP HOUSE MAFIA', src:'./music/Pullin Up ft. dksh - SLAP HOUSE MAFIA.mp3', img:'./resource/img-1.jpg'},
    {titulo:'The Groov ft. Dual Channels', artista:'Illusionize', src:'./music/The Groov ft. Dual Channels - Illusionize.mp3', img:'./resource/img-2.jpg'},
    {titulo:'Tick Tick Boom ft. WALF', artista:'SLAP HOUSE MAFIA', src:'./music/Tick Tick Boom ft. WALF - SLAP HOUSE MAFIA.mp3', img:'./resource/img-3.jpg'},
    {titulo:'Time ft. Shapeless', artista:'Illusionize', src:'./music/Time ft. Shapeless - Illusionize.mp3', img:'./resource/img-4.jpg'},
    {titulo:'Trevas (Original Mix) ft. Doubkore', artista:'Chapeleiro', src:'./music/Trevas (Original Mix) ft. Doubkore - Chapeleiro.mp3', img:'./resource/img-5.jpg'},
    {titulo:'Trump It', artista:'Illusionize', src:'./music/Trump It - Illusionize.mp3', img:'./resource/img-6.jpg'},
    {titulo:'UFO (Original Mix) ft. RZO', artista:'Chapeleiro', src:'./music/UFO (Original Mix) ft. RZO - Chapeleiro.mp3', img:'./resource/img-1.jpg'},
    {titulo:'Unforgettable ft. Marcos Ferrari & dksh', artista:'SLAP HOUSE MAFIA', src:'./music/Unforgettable ft. Marcos Ferrari & dksh - SLAP HOUSE MAFIA.mp3', img:'./resource/img-2.jpg'},
    {titulo:'WATCH OUT ft. Malive', artista:'Illusionize', src:'./music/WATCH OUT ft. Malive - Illusionize.mp3', img:'./resource/img-3.jpg'},
    {titulo:'We Come Back (Original Mix) ft. Victor Lou & Visage Music', artista:'Illusionize', src:'./music/We Come Back (Original Mix) ft. Victor Lou & Visage Music - Illusionize.mp3', img:'./resource/img-4.jpg'},
    {titulo:'With U ft. Volkoder', artista:'Illusionize', src:'./music/With U ft. Volkoder - Illusionize.mp3', img:'./resource/img-5.jpg'}
]
let musica = document.querySelector('.audio');
let indexMusic = 0;
let musicDuration = document.querySelector('.end');
musica.addEventListener('loadeddata', duration);
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let musicArtist = document.querySelector('.description i');

function indexMusic(index){
    musica.setAttribute('src=', music[index].src);
    musica.addEventListener('loadeddata', () => {
        musicName.textContent = music[index].titulo;
        musicArtist.textContent = music[index].artista;
        image.src = music[index].img;
        musicDuration.textContent = secToMinutes(Math.floor(musica.duration));
    });
}


function tocarMusica() {
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.pause').style.display = 'none';
}

function updateBar() {
    let progress = document.querySelector('progress');
    progress.style.width = (musica.currentTime / musica.duration) * 100 + '%';
    let timeUpdate = document.querySelector('.start');
    timeUpdate.textContent = secToMinutes(Math.floor(musica.currentTime));
}

function secToMinutes(seconds) {
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if (secondsField < 10) {
        secondsField = '0' + secondsField;
    }
    return minutesField + ':' + secondsField;
}


function duration(){
    let musicDuration = document.querySelector('.end');
    musicDuration.textContent = secToMinutes(Math.floor(musica.duration));
    //musicDuration.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
}





document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', updateBar);
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusic--;
    renderizeMusic(indexMusic);
});
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusic++;
    renderizeMusic(indexMusic);
});