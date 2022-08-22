
let gifs = ['./imagens/bobrossparrot.gif', './imagens/bobrossparrot.gif', './imagens/explodyparrot.gif', './imagens/explodyparrot.gif', './imagens/fiestaparrot.gif', './imagens/fiestaparrot.gif', './imagens/metalparrot.gif', './imagens/metalparrot.gif', './imagens/revertitparrot.gif', './imagens/revertitparrot.gif', './imagens/tripletsparrot.gif', './imagens/tripletsparrot.gif', './imagens/unicornparrot.gif', './imagens/unicornparrot.gif']
let arr = []
let arrDeDois = []
let quantidadeJogadas=0;
let pergunta = 0
let acertos = 0
let podeVirarCartas = true


function Inicio() {
  document.querySelector("ul").innerHTML = "";
  pergunta = (prompt("com quantas cartas deseja jogar ?, entre 4 e 14, e tem que ser número par :)"))
  let lista = document.querySelector('ul')
  if (pergunta >= 4 && pergunta % 2 === 0 && pergunta <= 14) {
    for (let i = 0; pergunta > i; i++) {
      arr.push(gifs[i])
    }
    arr.sort(comparador)
    for (let i = 0; pergunta > i; i++) {


      lista.innerHTML += `<div class="card" onclick="cartaClique(this)">
            <div class="papagaio face">
            <img src="./imagens/front.png" alt="">
            </div>
            <div class="gif face">
            <img class="image" src="${arr[i]}">
            </div>
        </div>`
    }
  }
  else {
    Inicio()
  }
}
Inicio()

function cartaClique(carta) {
  if(carta.classList.contains('acertada')===true){
    return
  }
if(podeVirarCartas){
  quantidadeJogadas=quantidadeJogadas+1
  let papagaio = carta.querySelector(".papagaio")
  let gif = carta.querySelector(".gif")

  papagaio.classList.add("front-click")
  gif.classList.add("back-click")
verificarPar(carta)
  }
}

function virarCarta(carta) {
  let papagaio = carta.querySelector(".papagaio")
  let gif = carta.querySelector(".gif")

  papagaio.classList.remove("front-click")
  gif.classList.remove("back-click")
}


function comparador() {
  return Math.random() - 0.5;
}




function verificarPar(carta) {
  if (arrDeDois.length === 0) {
    arrDeDois.push(carta)
  }
  else {
    arrDeDois.push(carta)
    let primeiroItemArray = arrDeDois[0]
    let primeiroItem = primeiroItemArray.querySelector('.image').src

    let segundoItemArray = arrDeDois[1]

    let segundoItem = segundoItemArray.querySelector('.image').src

    
    if (primeiroItem === segundoItem) {
      arrDeDois[0].classList.add('acertada')
      arrDeDois[1].classList.add('acertada')
      acertos=acertos+2
    
      checarFinalJogo()
    }

    else {
      podeVirarCartas=false
      setTimeout(function(){
        virarCarta(primeiroItemArray);
        virarCarta(segundoItemArray);
        podeVirarCartas = true;
        },1000)
        console.log(podeVirarCartas)
    }
    arrDeDois = []
    
  }
}

function checarFinalJogo(){
  console.log('entrou na função')
  if(arr.length===acertos){
    
    setTimeout(finalAlert, 1000)
  }
} 
function finalAlert(){
  alert("Você ganhou em " + quantidadeJogadas + " jogadas!")
  let perguntadnv = prompt("gostaria de jogar novamente?")

  if(perguntadnv === "sim"){
    Inicio()
  }
  else{
    alert("obrigado por jogar")
  }
}

function repeteInicio(){
  pergunta = (prompt("com quantas cartas deseja jogar ?, entre 4 e 14, e tem que ser número par :)"))
  let lista = document.querySelector('ul')
  if (pergunta >= 4 && pergunta % 2 === 0 && pergunta <= 14) {
    for (let i = 0; pergunta > i; i++) {
      arr.push(gifs[i])
    }
    arr.sort(comparador)
    for (let i = 0; pergunta > i; i++) {


      lista.innerHTML += `<div class="card" onclick="cartaClique(this)">
            <div class="papagaio face">
            <img src="./imagens/front.png" alt="">
            </div>
            <div class="gif face">
            <img class="image" src="${arr[i]}">
            </div>
        </div>`
    }
  }
  else {
    repeteInicio()
  }
}