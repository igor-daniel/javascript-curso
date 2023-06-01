// addEventLinsteber 
const img = document.querySelector('img')
 
// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function(){
  console.log('clicou')
})

//Callback
function callback(){
  console.log('clicou')
}

img.addEventListener('click', callback); // jeito mais correto a se fazer(passando a função fora do evento)
img.addEventListener('click', callback()) //jeito errado, ja executando a função

//Event

function call(event){
  console.log(event)
}

//propriedades do Event
const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event){
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo do evento
  const path = event.path; 
  console.log(currentTarget, target, type, path)
}
animaisLista.addEventListener('click', executarCallback)
 
// event.preventDefault()
const linkExeterno = document.querySelector('a[href^="http"]')

function clickNolink(event){
  event.preventDefault();
  console.log(event.currentTarget.href)
}
linkExeterno.addEventListener('click', clickNolink)

// Diferentes Eventos
const h1 = document.querySelector('h1');

function callb(event) {
  console.log(event.type, event)
}

h1.addEventListener('click', callb);
h1.addEventListener('mouseenter', callb)
window.addEventListener('scroll', callb)
window.addEventListener('resize', callb)
window.addEventListener('keydown', callb)


//keyboard 
function handleKeyboard(event){
  if(event.key === 'a'){
    document.body.classList.toggle('azul')
  }else if(event.key === 'v'){
    document.body.classList.toggle('vermelho')
  }
}
window.addEventListener('keydown', handleKeyboard)

//forEach e Eventos

const imgs = document.querySelectorAll('img')

function imgSrc(event){
  const src = event.currentTarget.gerAttribute('src');
  console.log(src);
}
imgs.forEach((imgs)=>{
  img.addEventLinstener('click', imgSrc)
})