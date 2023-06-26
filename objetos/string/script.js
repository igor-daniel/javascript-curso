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

listaPreco[0].padStart(10, '.'); // ...... R$ 99
listaPrecos[0].padEnd(10, '.'); //R$ 99 ......