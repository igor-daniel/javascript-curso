// Prototype
//A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade; 
}
const andre = new Pessoa('andre', 25);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); //undefined
//prototype está só na função.,

//Função prototype
//É possível adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function(){
  return this.nome + ' andou'
}
Pessoa.prototype.nadar = function(){
  return this.nome + ' nadou'
}

//Herança de protótipo
//o objeto possui acesso aos métodos e propriedades do protótipo do constructor responsável
//por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas herdamos do protótipo de Object.

Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();

//Construtores Nativos

const pais = 'Brasil'
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

// É possível acessar a função do protótipo

const lista = document.querySelectorAll('li');

//tranforma em uma array
const listaArray = Array.prototype.slice.call(lista);

//Método do Objeto vs Protótipo

Array.prototype.slice.call(lista);
Array.from(lista);

//retorna uma lista com métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array, prototype);

//Entenda o que está sendo retornado

const Carro = {
  marca: 'ford', 
  preco: 2000, 
  acelerar(){
    return true;
  }
}

Carro //object
Carro.marca //string
Carro.preco // number
Carro.acelerar() //boolean
Carro.marca.charAt // function
Carro.marca.charAt(0) // string