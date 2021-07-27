let btns = document.getElementById('btn');
let outputs = document.getElementById('output');
let quote = [
  '"It does not do to dwell on dreams and forget to live."-Albus Dumbledore',
   '"One day, you will be old enough to start reading fairytales again."-Narnia',
   '"If people were rain, I was drizzle and she was a hurricane."-Looking for Alaska',
   '"Without a filter, man is just chaos walking."-Chaos Walking',
   '"Better terrible truths than kind lies."-Six of Crows',
   '"He is half of my soul as the poets say."-Song of Achilles',
   '"You are all the colors in one, at full brightness."-ALl the Bright Places',
   '"Underneath this veneer of slighlty crazy and socially inept, I am a complete disaster."-Fangirl',
   '"Perfection is nothing more than a phantom shadow we are all chasing."-Dumplin',
   '"For anyone who has been taught that good equals small and silent, here is my heart with all its ugly tangles and splendid fury."-Genuine Fraud'
];

var newQuote = function() {

  let number = Math.floor(Math.random()*10);
  outputs.innerHTML=quote[number];
}


btns.addEventListener("click",newQuote);



let btns2 = document.getElementById('btn2');
let outputs2 = document.getElementById('output2');
let books = ['The Midnight Library','FanGirl','The Girl Who Drank the Moon','The Book Thief','To Kill a Mockingbird','The Book of M','We Both Die at The End','Lord of the Flies','Circe','Turtles All the Way Down'];

var newBook = function() {
  let number2 = Math.floor(Math.random()*10);
  outputs2.innerHTML=books[number2]
}

btns2.addEventListener("click",newBook);
