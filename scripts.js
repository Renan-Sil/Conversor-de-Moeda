const clicar = document.getElementById(".button")
const valorMoeda = document.querySelector(".valores-moeda")
const mudarNome = document.querySelector(".moeda-convertida")
const mudarImg = document.querySelector(".img-moeda")

function clicado(){
    const pegarValor = document.querySelector(".valor-selecionado").value
    const realBrasileiro = document.querySelector(".valor-moeda-real")
     const moedaConvertida = document.querySelector(".valor-moeda")
    

    const dolar = 5.0
    const Euro = 6.26
    const Libra = 7.45
    const dolarConvertido = pegarValor / dolar
    const euroConvertido = pegarValor / Euro
    const libraConvertido = pegarValor / Libra
    
    function mudarMoeda(){
        const colocarValorMoeda = document.querySelector(".valores-moeda")
    }

    if(valorMoeda.value == "Dolar"){
       moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USA"
    }).format(dolarConvertido)
    
    mudarNome.innerHTML = "Dólar"
    mudarImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if(valorMoeda.value == "Euro"){
          moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(euroConvertido)

    mudarNome.innerHTML = "Euro"
    mudarImg.src = "./assets/Euro.png"
    }

    if(valorMoeda.value == "Libra"){
          moedaConvertida.innerHTML = new Intl.NumberFormat("en-BG", {
        style: "currency",
        currency: "GBP"
    }).format(libraConvertido)

    mudarNome.innerHTML = "Libra"
    mudarImg.src = "./assets/libra 1.png"

    }
   
          realBrasileiro.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(pegarValor)

}

const conversão = document.addEventListener("click", clicado)
const changeValor = document.addEventListener('change', valorMoeda)
const  mudar = document.addEventListener('change', mudarImg)
