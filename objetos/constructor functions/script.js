//objeto definido
const carro = {
  marca: 'ford', 
  preco: 0
}

//Constructor functions

function Carro(){
  this.marca = 'Marca';
  this.preco = 0
}

const honda = new Carro()
honda.marca = 'Ford';
honda.preco = 200;

//new Keyword

const fiat = new Carro();

//1 cria um novo objeto
// fiat={};

//2 define o protótipo
honda.prototype = Carro.prototype; 

//3 Aponta a variável this para o objeto
// this = fiat;

//4 executa a função, substituindo this pelo objeto
fiat.marca = 'Fiat';
fiat.preco = 5000;

//5 retorna o novo objeto
// return fiat = {
//   marca: 'Fiat', 
//   preco: 5000
// }

//this Keyword
// o this faz referência ao próprio objeto construído a Constructor Function.

function Veiculo(marcaAtribuida, precoInicial){
  const  taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marcaAtribuida;
  this.preco = precoFinal;
  // console.log(this)
}
const bmw = new Veiculo('bmw', 20000)
console.log(bmw)

//Exemplo real

const Dom = {
  seletor: 'li',
  element(){
    return document.querySelector(this.seletor);
  },
  ativo(){
    this.element().classList.add('ativo');
  }
}
Dom.ativo(); //adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); //adiciona ativo ao ul

//tranformando em um constructor

function Dom2(seletor){
  this.element = function(){
    return document.querySelector(seletor)
  }
  this.ativar = function(){
    this.element().classList.add('ativo')
  }
}
const li = new Dom2('li')
li.ativar();
const ul = new Dom2('ul')