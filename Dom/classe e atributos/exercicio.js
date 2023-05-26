// Adicione a classe ativo a todos os itens do menu
const menua = document.querySelectorAll('.menu a')
menua.forEach((a)=> a.classList.add('ativo') )
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menua.forEach(a => a.classList.remove('ativo'))
menua[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')
imgs.forEach((item)=>{
  if(item.hasAttribute('alt')){
    console.log(`Temm ${item}`)
  }else{
    console.log(`Não`)
  }
})
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="htto"]')
link.setAttribute('href', 'https://igor-daniel.github.io/portifolio/')
