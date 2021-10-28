"use strict";
//1.
function getRightForm(number, count1 ="товар", count2 = "товара", count3 = "товаров") {
    let n = number % 100,
    n1 = n % 10;

    if(n>4 && n<21) return count3;
    if(n1===1) return count1;
    if(n>1 && n1 <5) return count2;
    return count3;
}
let test = getRightForm (0, "товар", "товара", "товаров");
console.log(`Нужная форма слова: ${test}`);

let number =+prompt("Введите сумму");

//что-то пошло не так 

//2.
function range (start, end, optional = "1") {
    if (isNaN(start) || isNaN(end) || start >= end) return false;
    var a = [], i = 0;
    while (start <= end) {a[i] = start; i++}
    return a;
}
// дальше не идет 

//3.
//i.
let user = "Julia";
console.log(typeof "Julia");

//ii.
if(user === undefined) {
    
}
console.log(user); 

//iii.
function isNumber(user) {
    return typeof user === "number" && !isNaN(user);
}
console.log(isNumber("Julia")); 