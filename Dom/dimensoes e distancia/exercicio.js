// Verifique a distância da primeira imagem
const img = document.querySelector('img')
const height = img.offsetTop;
console.log(height)
// em relação ao topo da página
const distanciaTop = img.offsetTop;
console.log(distanciaTop)
// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img')
total = 0
imgs.forEach((item)=>{
  const width = item.offsetWidth
  total += width
})
console.log(total)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((item)=>{
  const width = item.offsetWidth
  const height = item.offsetHeight
  if(width < 48 && height < 48){
    console.log('Link não adaptado para dispositivo movel')
  }else{
    console.log('links adaptados')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}

// const janela = window.innerWidth
// if(janela < 720){
//   const menu = document.querySelector('.menu')
//   menu.classList.add('menu-mobile')
// }