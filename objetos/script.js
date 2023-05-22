var pessoa = {
  nome: 'igor', 
  idade: 21,
  profissao: 'dev'
}
var quadrado = {
  lados: 4, 
  area: function(lado){
    return lado * lado;
  } ,
  area(lado){
    return lado * lado;
  },//um jeito diferente de escrita, mas que também é aceitável.


  perimetro: function(lado) {
    //para usar um valor de dentro de um objeto preciso usar o this
    return this.lados * lado;
  },
}
console.log(quadrado.lados);
console.log(quadrado.area(80))
console.log(quadrado.perimetro(4))

// podendo ser adicionado qualquer tipo de dado no objeto.

// um objeto nativo do javascript Math.
Math.random()