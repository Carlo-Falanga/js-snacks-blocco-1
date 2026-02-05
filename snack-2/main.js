console.log("It works");

const firstWord = prompt("Insert a word");
const secondWord = prompt("Insert another word");

if (firstWord.length > secondWord.length) {
  alert(secondWord);
  alert(firstWord);
} else if (firstWord.length < secondWord.length) {
  alert(firstWord);
  alert(secondWord);
} else {
  alert("Same length");
}
