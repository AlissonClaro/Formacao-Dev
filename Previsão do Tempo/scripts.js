const key = "cebcd482eda57fa9a6714c1c2ba91885"


function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = "Temp. Atual " + Math.floor(dados.main.temp) + " °C"
    document.querySelector(".temp-min").innerHTML = "Temp. Minima " + Math.floor(dados.main.temp_min) +"↓ °C"
    document.querySelector(".temp-max").innerHTML = "Temp. Maxima " + Math.floor(dados.main.temp_max) + "↑ °C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = 'https://openweathermap.org/img/wn/' + dados.weather[0].icon + '.png';
}   


async function buscarCidade(cidade) {

    let dados = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=' + key + '&units=metric&lang=pt_br',).then((resposta) => resposta.json())
       
        colocarDadosNaTela(dados)


}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}

