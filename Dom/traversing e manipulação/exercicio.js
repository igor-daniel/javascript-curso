// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu")
const copy = document.querySelector('.copy')
const novoMenu = menu.cloneNode(true)
copy.appendChild(novoMenu)


// Selecione o primeiro DT da dl de Faq
const Faq = document.querySelector('.faq')
const preimeiroDT = Faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const proximoDD = preimeiroDT.querySelector('dt')
// Substitua o conteúdo html de .faq pelo de .animais
const animal = document.querySelector('.animais')

Faq.innerHTML = animal.innerHTML;