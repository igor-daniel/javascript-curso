// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
paragrafos.forEach(el => console.log(el))

// Mostre o texto dos parágrafos no console
paragrafos.forEach(el => console.log(el.innerText))

// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs2.forEach(() => {
  console.log(i++);
});

imgs2.forEach(() => i++);
