//criando um array
var carros = ['fiat', 'ford', 'nissan']

//acessado o valor do array
carros[0] // fiat
carros[2] //nissan

// metodos de um array
carros.pop() // remove o ultimo item e retorna ele
carros.push('citroen') // adiciona um item no final do array
carros.length // diz a quantidade de itens do array.

// For loop
for(let numero = 1; numero <= 10; numero++){
  console.log(numero)
}

//while loop
var i = 0;
while(i<=10){
  console.log(i)
  i++
}

//Arrays e loop
var videoGames= ['swith', 'ps4', 'xbox'];
videoGames.push('ps2')
for (var i = 0; i < videoGames.length; i++){
  console.log(videoGames[i]);
}

// ForEach
//acontece pra cada item do array
videoGames.forEach(function(item, index) {
  console.log(item, index)
})