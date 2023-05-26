//classList 
const menu = document.querySelector('.menu')

menu.className; // string
menu.classList; // lisde de classes
menu.classList.add('ativo') //adiciona a classe ativo
menu.classList.add('ativo', 'mobile'); // adiciona 2 classes
menu.classList.remove('ativo') // remove a classe
menu.classList.toggle('ativo') // adicina/remove a classse
menu.classList.contains('ativo') // diz se tem ou não a classe
menu.classList.replace('ativo', 'inativo') // Substitui a primeira pela segunda.

//Atributes

const animais = document.querySelector('.animais')
animais.attributes; //retorna todos os atributos
animais.attributes[0] // retorna o primeiro atributo

//getAttribute e setAttribute

const img = document.querySelector('img');

img.getAttribute('src'); //valor src
img.setAttribute('alt', 'texto Alternativo'); // muda o alt
img.hasAttribute('id'); //Diz se tem ou nao um ID
img.removeAttribute('alt'); //remove o alt

//img.hasAttribute(); //true / false se tem algum atributo.
