// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa2(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
const carlos = new Pessoa2('carlos', 'conceição', 35)
Pessoa2.prototype.fullName = function(){
  return `${this.nome} ${this.sobrenome}`
}
console.log(carlos.fullName())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; // Function
li.innerText; // strig
li.value; // nunber
li.hidden; // boolean
li.offsetLeft; // number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //sring