var hello = 'Hello'; //asignada de forma global
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
  globalVar = 'im global'//Mala prácttica sin var, const o Let
}

helloWorld();
console.log(globalVar)

const anotherFunction = () => {
  var localVar = globalVar = 'Im Global' //Doble asignación, mala práctica
}

anotherFunction();
console.log(globalVar);                  //para ssignar  variable global