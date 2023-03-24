"use script"

let largeImg = document.getElementById("mainImg");

let nature01 = document.getElementById("nature1");
let nature01Src = document.getElementById("nature1").src;
let nature02 = document.getElementById("nature2");
let nature02Src = document.getElementById("nature2").src;
let nature03 = document.getElementById("nature3");
let nature03Src = document.getElementById("nature3").src;
let nature04 = document.getElementById("nature4");
let nature04Src = document.getElementById("nature4").src;


nature01.addEventListener("click" , function(){
  largeImg.src=nature01Src
})

nature02.addEventListener("click" , function(){
  largeImg.src=nature02Src
})

nature03.addEventListener("click" , function(){
  largeImg.src=nature03Src
})

nature04.addEventListener("click" , function(){
  largeImg.src=nature04Src
})
