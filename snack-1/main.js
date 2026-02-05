console.log("It works");

const firstNumber = Number(prompt("Insert a number"));
const secondNumber = Number(prompt("Insert another number"));
console.log(firstNumber);

if (firstNumber > secondNumber) {
  alert(firstNumber);
} else if (firstNumber < secondNumber) {
  alert(secondNumber);
} else {
    alert("I numeri sono uguali")
}
