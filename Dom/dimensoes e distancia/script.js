// Height e width 

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro do scroll

// mesma coisa com o width.

// offsetTop e offsetLeft
section.offsetTop; //distância entre o topo do elemento e o topo da página;

section.offsetLeft; //Distância entre o canto esquerdo do elemento e o canto esquerdo da página;

//getBoundingClientRect()

// // const rect = document.getBoundingClientRect();
// rect.height; //height do elemento
// rect.width; //width do elemento
// rect.top; //distância entre o topo do elemento e o scroll

// Window
window.innerWidth; // width da janela
window.outerWidth; //soma dev tools também
window.innerHeight; // height da janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; //distância total do scroll vertical

if(window.innerWidth < 600){
  console.log('tela menor que 600px')
}

// matchMedia();
//media query no javascript
const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
  console.log('Tela menor que 600px')
} else{
  console.log('Tela maior que 600px')
}