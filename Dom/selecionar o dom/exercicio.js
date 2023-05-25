// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img')
console.log(imgs)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgs2 = document.querySelectorAll('[src^="img/imagem"]')
console.log(imgs2)

// Selecione todos os links internos (onde o href começa com #)
const linksId = document.querySelectorAll('[href^="#"]')
console.log(linksId)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descrição h2')
console.log(h2)

// Selecione o último p do site
const Ps = document.querySelectorAll('p:last-child')
console.log(Ps[Ps.length - 1])
