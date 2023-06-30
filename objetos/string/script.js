// String
//É a construtora de strings, toda string possui as propriedades e métodos do prototype de String

const comida = 'Pizza';
const liquido = new String('Água'); //retorna um objeto
const ano = new String(2018);

//str.length
//propriedade com o total de caracteres da string

const frase = 'A melhor comida'

comida.length; // 5
frase.length; // 15

comida[0] //P
frase[0] // A
frase[frase.length -1] // a

//str.charAt(n)
//retorna o caracter de acordo com o index de (n)

const linguagem = 'javascript'
linguagem.charAt(0); //J
linguagem.charAt(2); //v
linguagem.charAt(linguagem.length -1); // t

//str.includes(search, position)
//Procura pela string exata de outra string. A procura é case sensitive.

const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja';

//se tem dentro da string
listaFrutas.includes(fruta); //true
fruta.includes(listaFrutas); //false

//str.endsWith(search) e str.startsWith(search)

//procura pela string exata dentro de outra string. A procura é case sensitive.

fruta.endsWith('nana') // true
fruta.startsWith('Ba') // true
fruta.startsWith('na') // true


//str.slice(start, end)
//corta a string de acordo com os valores de start e end.

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); //cliente
transacao1.slice(-4); //pega os 4 ultimos  "ente"
transacao1.slice(3, 6) // ósi


//str.indexOf(search) e str.lastIndexOf(seach)

//retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra'; 

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r') // 6
instrumento.indexOf('ta') //3

//str.padStart(n, str) e str.padEnd(n, str)

//aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n=10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const listaPrecos = ['R$99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) =>{
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // ...... R$ 99
listaPrecos[0].padEnd(10, '.'); //R$ 99 ......

//str.repeat(n)
//repete a string(n) vezes

const frase2 = 'ta';

frase.repeat(5); //tatatatata

//str.replace(regex|substr, newstr|function)
//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',','.'); //'R$ 1200.43'


//str.split(padrao)
//divide a string de acordo com o  padrão passado e retorna uma array.

const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
const htmlNovo = htmlArray.join('section')

//str.toLowerCase() e str.toUpperCase()
//retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

// (sexo1.toLowerCase() === 'feminino'); //true
// (sexo2.toLowerCase() === 'feminino'); //true
// (sexo3.toLowerCase() === 'feminino'); //true

//str.trim(), str.trimStart(), str.trimEnd()
//remove espaço em branco do inicio ou final de uma string

const valor =  ' R$ 23.00 '

valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$23.00 '
valor.trimEnd(); // ' R$23.00'
