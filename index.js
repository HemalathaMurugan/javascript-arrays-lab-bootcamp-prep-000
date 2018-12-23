var kittens = ["Milo", "Otis", "Garfield"]  //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var res = [...kittens,name];
}

function prependKitten(name) {
  var res = [name,...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, length-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
