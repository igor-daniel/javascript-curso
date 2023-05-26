// forEach 
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index, array)=>{
  console.log(item) //retorna o item atual no loop
  console.log(index) // retorna o numero do index
  console.log(array) // retorna o array completo.
})

// transformando um htmlcolection, num array para poder usar o método forEach
const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item)
})

//Arow function
// () =>{}  essa estrutura
// podendo dispensar as aspas() quando for usado so um parametro
// podendo dispensar as chaves em caso de um argumento na função, colocando na mesma linha
// item => console.log(item++)