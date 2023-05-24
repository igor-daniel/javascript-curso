const titulo = document.querySelector('h2');

titulo.innerText // retorna o texto
titulo.classList // retorna as classes
titulo.id // retorna o id
titulo.offsetHeight // retorna a altura do elemento

function callback(){
  const ling =  navigator.language = 'en'
  console.log(ling)
}
titulo.addEventListener('click', callback);
//ativa a função callback ao clicar no titulo

// Exercíoio

// Retorne o url da página atual utilizando o objeto window
const URL = document.URL
console.log(URL)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const el = document.querySelector('.ativo')
console.log(el)
// Retorne a linguagem do navegador
const linguagem = navigator.language;
console.log(linguagem)
// Retorne a largura da janela 
const janela = window.innerWidth
console.log(janela)