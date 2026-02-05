console.log('It works');

let array = []

for (let i = 0; i < 6; i++){
   const number = Number(prompt("Insert a number"));
   console.log(number);

   if (number % 2 !== 0){
    array.push(number)  
} } 

console.log('Numeri dispari inseriti:', array);
