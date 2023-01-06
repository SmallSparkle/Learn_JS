var secretNum = Math.ceil(Math.random() * 10);
var tries = 0;

function guessNum(num) {
  if (tries >= 5) {
    return alert("No more tries. Game ower");
  }
  if (num === secretNum) {
    alert("You won");
    tries = 5;
  } else {
    alert("You not guessed");
    tries++;
  }
}
