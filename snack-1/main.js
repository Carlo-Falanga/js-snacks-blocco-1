console.log("It works");

const firstNumber = Number(prompt("Insert a number"));
const secondNumber = Number(prompt("Insert another number"));


if (firstNumber > secondNumber) {
  alert(firstNumber + " e' maggiore");
} else if (firstNumber < secondNumber) {
  alert(secondNumber + " e' maggiore");
} else {
    alert("I numeri sono uguali")
}
