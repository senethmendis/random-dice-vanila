//left dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var path = document.querySelector("img")[0].getAttribute("src");
var newPath = "images/dice" + randomNumber1 + ".png";
document.querySelector("img").setAttribute("src", newPath);

console.log(newPath);
// // // alert(randomNumber1);

//right dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceTow = document.getElementsByTagName("img")[1].getAttribute("src");
var diceTowNewPath = "images/dice" + randomNumber2 + ".png";
document.getElementsByTagName("img")[1].setAttribute("src", diceTowNewPath);

console.log(diceTowNewPath);

//change the h1

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉 Payer 1 Wins !";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎉 Payer 2 Wins !";
} else {
  document.querySelector("h1").innerHTML = "🔄 Its a Draw!";
}
