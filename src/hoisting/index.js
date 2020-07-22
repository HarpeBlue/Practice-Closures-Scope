a = 2;
var a;
console.log(a)//2
//hoisting eleva las declaraciones.

console.log(a);//undifined
var a = 2;
//sólo funciona en declaraciones y no en inicializaciones

nameOfDog('Elmo');
function nameOfDog(name) {
  console.log(name);
}
