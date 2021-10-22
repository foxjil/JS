"use strict";


//homework
//1.
let  count = parseInt(prompt("Введите число"));
if (count === 100 || count > 90) {
    console.log ("Отлично");
} else if (count === 89 || count > 60) {
    console.log ("Хорошо");
} else if (count === 59 || count > 40) {
    console.log ("Удовлетворительно"); 
}else if (count === 39 || count > 0) {
    console.log("Попробуйте еще раз");
}


//2.
let operand1 = parseInt(prompt("Введите первый операнд"));
let operand2 = parseInt(prompt("Введите второй операнд"));
let operator = prompt("Введите оператор");

switch (operator) {
   case "+":
      console.log(operand1 + operand2);
      break;
   case "-":
      console.log(operand1 + operand2);
      break;
   case "*":
      console.log(operand1 * operand2);
      break;
   case "/":
      console.log(operand1 / operand2);
      break;
   default:
      console.log("Попробуйте ещё раз");
}



/*//3.
let pl = 12; //тарелки
let f = 4; //моющее ср-во
while (start <= end) {
    if (start % 2 ===0) console.log(start);
    start +- 1;
}


//4.
function getRandomNumber (min,max) { 
    min = 1;
    max = 9;
    console.log(getRandomNumber(1,9));
}*/



