// Adicionar classe block nas duas que estiverem certas

let gifs = ['./imagens/bobrossparrot.gif', './imagens/bobrossparrot.gif', './imagens/explodyparrot.gif', './imagens/explodyparrot.gif', './imagens/fiestaparrot.gif', './imagens/fiestaparrot.gif', './imagens/metalparrot.gif', './imagens/metalparrot.gif', './imagens/revertitparrot.gif', './imagens/revertitparrot.gif', './imagens/tripletsparrot.gif', './imagens/tripletsparrot.gif', './imagens/unicornparrot.gif', './imagens/unicornparrot.gif']
let arr = []
let arrDeDois = []
let quantidadeJogadas=0;

function Inicio() {

  const pergunta = (prompt("com quantas cartas deseja jogar ?, entre 4 e 14, e tem que ser número par :)"))
  let lista = document.querySelector('ul')
  if (pergunta >= 4 && pergunta % 2 === 0 && pergunta <= 14) {
    for (let i = 0; pergunta > i; i++) {
      arr.push(gifs[i])
    }
    arr.sort(comparador)
    for (let i = 0; pergunta > i; i++) {


      lista.innerHTML += ` <div class="card" onclick="cartaClique(this)">
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

  quantidadeJogadas=quantidadeJogadas+1
  console.log(quantidadeJogadas)
  let papagaio = carta.querySelector(".papagaio")
  let gif = carta.querySelector(".gif")

  papagaio.classList.add("front-click")
  gif.classList.add("back-click")

  verificarPar(carta)
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
    console.log(arrDeDois)
    let primeiroItemArray = arrDeDois[0]
    let primeiroItem = primeiroItemArray.querySelector('.image').src

    let segundoItemArray = arrDeDois[1]

    let segundoItem = segundoItemArray.querySelector('.image').src

    
    if (primeiroItem === segundoItem) {
      carta.classList.add('acertada')
      
    }

    else {
      setTimeout(virarCarta, 1000, primeiroItemArray)
      setTimeout(virarCarta, 1000, segundoItemArray)
      //caso não der certo
    }
    arrDeDois = []

  }



}

/* function checarFinalJogo(){
  let contador = 0

  for(i=0;i<arrDeDois.length;i++){
    if(arrDeDois[i].classList.contains('acertada')===true){
      contador++
    }
  }
  if(arrDeDois.length===contador){
    alert("Você ganhou em " + quantidadeJogadas + " jogadas !")
    Inicio()
  }
}
