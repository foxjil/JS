"use strict";

//1.
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
 ];

 let sum = 0;
 let count = 0;
 for (let i = 0; i < nums.length; i++) {
     for (let a = 0; a < nums[i].length; a++) {
         nums[i][a] += 10;
         sum += nums[i][a];
     }
     count += nums[i].length;
 }
 console.log("Average = ", sum / count);

 //2.
 
 /*let nums = [18, 300, 154, 74, 85, 98];
 for (let i = 0, i < 7, i++) {
     Math.random()
 }
 console.log(nums);*/

 /*Напишите пжл решение данной задачи с объяснениями, не смогла сделать*/

 //3.
 let nums = [23, -56, 75, -90, 123];
 let newNums = [];
 for (let num of nums) {
     if (num < 0) newNums.push(num);
 }
 console.log(newNums);


 //4.
 let logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
 let inputLogin = prompt("Введите логин");
 while (!logins.includes(inputLogin)) {
     inputLogin = prompt ("Логин не найден. Введите ещё раз");
 }
 console.log ("Логин найден");


//5.
//данную задачу тоже, можно пжл решение 

