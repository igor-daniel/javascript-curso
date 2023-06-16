//Native
//Obejetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host

//construtores de objetos nativos
Object
String
Array
Function

//Host 
//Objetos do host são implementados pelo próprio ambiente.
//Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.Js os objetos do Host são diferentes, já que não estamos em um ambiente do browser

// Objetos do browser
NodeList 
HTMLCollection
Element

//User
//Objetos do user, são os objetos definidos pelo seu aplicativo. ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.
const Pessoa ={
  nome: 'André'
}

//Verificar se Existe

if(typeof Array.from !== "undefined");
if(typeof NodeList !== "undefined");