var button = document.querySelector(".button-submit")
var input = document.querySelector(".text-input")

let lista = []

function clicou (){
   lista.push(input.value)
   console.log(lista)
}


button.addEventListener('click', clicou)

