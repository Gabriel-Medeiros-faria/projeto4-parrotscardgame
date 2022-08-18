let gifs = ['./imagens/bobrossparrot.gif', './imagens/bobrossparrot.gif', './imagens/explodyparrot.gif', './imagens/explodyparrot.gif', './imagens/fiestaparrot.gif', './imagens/fiestaparrot.gif', './imagens/metalparrot.gif', './imagens/metalparrot.gif', './imagens/revertitparrot.gif', './imagens/revertitparrot.gif', './imagens/tripletsparrot.gif', './imagens/tripletsparrot.gif', './imagens/unicornparrot.gif', './imagens/unicornparrot.gif']
let arr = []

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
            <img src="${arr[i]}">
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

  let papagaio = carta.querySelector(".papagaio")
  let gif = carta.querySelector(".gif")

  papagaio.classList.add("front-click")
  gif.classList.add("back-click")

  setTimeout(virarCarta,1000,carta)
}

function virarCarta(carta){
  let papagaio = carta.querySelector(".papagaio")
  let gif = carta.querySelector(".gif")

  papagaio.classList.remove("front-click")
  gif.classList.remove("back-click")
}


function comparador() {
  return Math.random() - 0.5;
}