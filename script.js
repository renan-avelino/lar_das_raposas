let conteudo = document.querySelector(".container");
let linha = document.querySelectorAll(".colection");
let colunas = 0;
let cards = 0;

window.onload = function() {
  fetch("dados.json").then
    (
      (response) => {
        response.json().then((dados) => {
          for (let i = 0; i < 4; i++){
            conteudo.innerHTML += `<div class="colection"></div>`
          }
          dados.raposas.map((raposa) => {
            linha = document.querySelectorAll(".colection");
            console.log(cards + " - " + colunas + " - " + raposa.nome);

              linha[colunas].innerHTML += `<div class="card">
              <h1>${raposa.nome}</h1>
              <img src="${raposa.imagem}" alt="${raposa.nome}"><p class="text">Taxonomia: ${raposa.nomeCientifico}<br>Verdadeira: ${raposa.verdadeira}<br>Comprimento: ${raposa.comprimento}</p>
            </div>`;
            cards++;
            if(cards == 4){
              colunas++;
              cards = 0;
            }
          })
        })
      })
}

document.addEventListener('scroll', rolar);
var ultimaPosicao = 0;

function rolar() {
        var atualPosicao = window.scrollY;

        if(atualPosicao > ultimaPosicao || ultimaPosicao > 300) {
            document.querySelector("#subir").style.display = "block";
        } else {
          document.querySelector("#subir").style.display = "none";
        }

        ultimaPosicao = atualPosicao;
    }

document.querySelector("#subir").addEventListener("click", () => {
  document.querySelector("#subir").style.display = "none"; 
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  
})
