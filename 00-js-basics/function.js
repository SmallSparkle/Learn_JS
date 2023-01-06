// function

function sum(a, b) {
  if (typeof a != "number") {
    return NaN;
  }
  console.log("a is ", a);

  //   return a + b;
}
sum(1, 5);
let x = sum(8, 19);
console.log(x);
// if function has return than x=27, if function hasn't return than x=undefined

function getData(question) {
  while (true) {
    const result = +prompt(question);

    if (result === 0 || res) {
      return result;
    }
  }
}

const age = getData("How old are you");
console.log(age);
