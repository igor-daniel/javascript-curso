// outerHTML, innerHTML e innerText 

const menu = document.querySelector('.menu')

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; //texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag p vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag vai ser renderizada


//Tranversing 
//Como navegar pelo Dom, utilizando suas propriedades e métodos

const lista = document.querySelector('.animais-lista')

lista.parentElement; //pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; //primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); //todas as LI's
lista.querySelector('li:last-child'); //último filho

//Element vs Node 
//Element's representam um elemento HTML, ou seja, uma tag. Node representa
//um nó, e pode ser um elemento(Element), texto, comentário, quebra de linha e mais

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node de child

//Manipulando Elementos
// É possível mover elementos no dom com métodos de Node

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); //Move lista para o final de contato
contato.insertBefore(lista, titulo); //insere a lista andes de titulo
contato.removeChild(titulo); //remove titulo de contato
contato.replaceChild(lista, titulo); //substitui titulo por lista


//Novos Elementos 
//podemos criar novos elementos com método createElement()

const animais = document.querySelector('.animais')

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título'
novoH1.classList.add('titulo');

animais.appendChild(novoH1)

// Clonar Elementos
//todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior
//é necessário utilizar o método cloneNode()

const title = document.querySelector('h1');
const title2 = document.querySelector('h1')
const newTitle = title; 
// title, title2 e newTitle são iguais

const cloneTitle = title.cloneNone(true);  // true sinaliza para clonar os filhos também
contato.appendChild(cloneTitle)