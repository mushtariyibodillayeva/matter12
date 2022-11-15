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

//alphabet
function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("Mushtariy"));

//. /[l]/g
let text = "Hello world! My friends";
let search = /[l]/g;
let result = text.match(search);
console.log(result);

//Dunyo tarjimoni
function helloWorld(lang) {
  if (lang == "fr") {
    return "Bonjour";
  } else if (lang == "cn") {
    return "你好呀";
  } else if (lang == "en") {
    return "Hello";
  } else if (lang == "ks") {
    return "안녕하세요";
  } else if (lang == "as") {
    return "أهلاً";
  } else if (lang == "ts") {
    return "сәлам анда";
  } else if (lang == "af") {
    return "haai daar";
  } else if (lang == "qg") {
    return "Салам";
  } else if (lang == "fr") {
    return "Bonjour à tous";
  } else if (lang == "ru") {
    return "Всем привет";
  }
}
console.log(helloWorld("fr"));
console.log(helloWorld("cn"));
console.log(helloWorld("en"));
console.log(helloWorld("ks"));
console.log(helloWorld("as"));
console.log(helloWorld("ts"));
console.log(helloWorld("af"));
console.log(helloWorld("qg"));
console.log(helloWorld("fr"));
console.log(helloWorld("ru"));
