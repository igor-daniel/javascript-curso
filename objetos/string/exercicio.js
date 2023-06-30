// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item)=>{
  
  let numeroLimpo = +item.valor.replace('R$ ', '')
  if(item.descricao.slice(0, 4) === 'Taxa'){
    taxaTotal += numeroLimpo;
  }
})
transacoes.forEach((item)=>{
  let limpaNumero = +item.valor.replace('R$ ', '')
  if(item.descricao.includes('Recebimento') === true){
    recebimentoTotal += limpaNumero;
  }
})
console.log(taxaTotal)
console.log(recebimentoTotal)



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const novoArray = transportes.split(';')
console.log(novoArray)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const novoHtml = html.split('span');
const addA = novoHtml.join('a')
console.log(addA)         

// Retorne o último caracter da frase
const frase3 = 'Melhor do ano!';

console.log(frase3[frase3.length -1])

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let total = 0;
transacoes2.forEach((item)=>{
  item = item.toLocaleLowerCase();
  item = item.trim()
  if(item.slice(0, 4) === 'taxa'){
    total++
  }
})
console.log(total)