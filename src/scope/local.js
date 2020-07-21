const helloWorld = () => {
  const hello = 'Hello World'
  console.log(hello)
}

helloWorld();
console.log(hello);

var scope = 'I am global';

const funtionScope = () => {
  var scope = 'Im just a local'
  const func  = () => {
    return scope //ámbito Lexico.
  }
  console.log(func());
};

funtionScope();