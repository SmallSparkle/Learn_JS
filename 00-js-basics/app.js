var secretNum = Math.ceil(Math.random() * 10);
var tries = 0;

function guessNum(num) {
  while (tries <= 5) {
    if (tries === 5) {
      alert("No more tries");
      break;
    }
    if (num != secretNum && tries < 5) {
      alert("Wrong");
      tries++;
      console.log("Try N: " + tries);
      break;
    }
    if (num === secretNum) {
      alert("You won");
      break;
    }
    if (tries === 5) {
      alert("No more tries");
    }
  }
}
