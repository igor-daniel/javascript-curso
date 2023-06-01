// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


const linksInternos = document.querySelectorAll('a[href^="#"]')

linksInternos.forEach((link)=>{
  link.addEventListener('click', (lin)=>{
    lin.preventDefault();
    lin.target.classList.toggle('ativo')
  })
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


const body = document.querySelectorAll('body *')
// function handle(event){
//     console.log(event.currentTarget)
// }
function handle(event){
  event.currentTarget.remove()
}
body.forEach((element)=>{
  element.addEventListener('click', handle)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const ps = document.querySelectorAll('p')
window.addEventListener('keydown', (e)=>{
  if(e.key === 't'){
    ps.forEach((p)=>{
      p.classList.toggle('fontLarge')
    })
  }
})