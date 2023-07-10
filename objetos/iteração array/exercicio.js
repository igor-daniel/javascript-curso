// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCurso = Array.from(cursos)

const objCurso = arrayCurso.map((curso) =>{
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
})
console.log(objCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros0 = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = numeros0.filter((item)=>{
  return item > 100;
})
console.log(maiores100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some((item) => {
    return item === 'Baixo'
})
console.log(temBaixo)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valor = compras.reduce((anterior, item)=>{
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')

  return anterior + precoLimpo;
}, 0)

console.log(valor)