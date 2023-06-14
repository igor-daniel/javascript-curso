// Transforme o objeto abaixo em uma Constructor Function
function Pessoa() {
  this.nome = 'Nome pessoa',
  this.idade = 0,
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
function Humano(nome, idade){
  this.nome = nome;
  this.idade = idade;
}
const joao = new Humano('João', 20)
const maria = new Humano('Maria', 25)
const bruno = new Humano('Bruno', 15)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom3(seletor){
  const elementList = document.querySelectorAll(seletor)
  this.elements = elementList

  this.addClass = function(classe){
    elementList.forEach((element)=>{
      element.classList.add(classe)
    })
  }
  this.renoveClass = function(classe){
    elementList.forEach((element)=>{
      element.classList.remove(classe)
    })
  }
}