// seleciona pelo id
var animais = document.getElementById('animais');
console.log(animais)

//seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementByClassName('grid-section')

//seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul')

//retorna o primeiro elemento
console.log(gridSection[0])

// Seletor Geral Unico
//como se estivesse selecionando um elemento em CSS
const animais = document.querySelector('.animais') //para classes
const contato = document.querySelector('#contato') //para ID
const ultimoItem = document.querySelector('[href^="https://"]')
const primeiroUL = document.querySelector('ul')

//busca dentro da ul anpenas
const navItem = primeiroUL.querySelector('li');

//Seletor Geral Lista
//retorna uma Node list de elementos
const gridSections = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul')
const titulos = document.querySelectorAll('.titulo')
const fotosAnimais = document.querySelectorAll('.animais-lista img')

//retorna o segundo elemento
console.log(gridSections[1])