let gifs = ['./imagens/bobrossparrot.gif', './imagens/explodyparrot.gif', './imagens/fiestaparrot.gif', './imagens/metalparrot.gif', './imagens/revertitparrot.gif', './imagens/tripletsparrot.gif', './imagens/unicornparrot.gif']





function Inicio() {

  const pergunta = (prompt("com quantas cartas deseja jogar ?, entre 4 e 14, e tem que ser número par :)"))
  let lista = document.querySelector('ul')

  gifs.sort(comparador)

  if (pergunta >= 4 && pergunta % 2 === 0 && pergunta <= 14) {
    for (let i = 0; pergunta > i; i++) {
      
      lista.innerHTML += ` <div class="card" onclick="cartaClique(this)">
            <div class="front-face face">
            <img src="./imagens/front.png" alt="">
            </div>
            <div class="back-face face">
            <img src="${gifs[i]}">
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

  const back = carta.querySelector(".back-face")
  back.classList.toggle("back-click")

  const front = carta.querySelector(".front-face")
  front.classList.toggle("front-click")

}

function comparador() {
  return Math.random() - 0.5;
}