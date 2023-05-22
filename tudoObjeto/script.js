//string
var nome = 'André'

nome.length; //5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei') // 'Andrei' não altera a variável
nome; // 'André'

//numeros
let altura = 1.8;
altura.toString() //'1.8'
altura.toFixed() // 2 irá arredondar o valor.

//funções
function areaQuadrado(lado){
  return lado * lado;
}
areaQuadrado.toString(); 
//"function areaQuadrado(lado){
//  return lado * lado;
//}"

areaQuadrado.length; // 1