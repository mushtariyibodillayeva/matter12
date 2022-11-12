// Yosh kakulyatori
var year = 2022;
var year2 = 1975;
var next = "Sizning yoshingiz " + (year - year2) + " da"; //Sizning yoshingiz 47 da
console.log(next);

//Choy qancha istemol qilish hisobi
var num = 15;
var num2 = 60;
var num3 = 0.5;
var next2 = "Siz " + (num2 - num) * 365 * num3 + " l choy ichasiz";
console.log(next2); //Siz 8212.5 l choy ichasiz

function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("Mushtariy"));
