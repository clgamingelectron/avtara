// EDIT LIST HERE

let list = [
  "Show your pussy halfway",
  "Show your pussy halfway",
  "Show your pussy halfway",
  "Show your pussy from the back while you're bent down",
  "Show your ass bent down",
  "Sent a video of your ass",
  "Show your pussy completely"
  
  
];

// EDIT LIST HERE












































"use strict";

const btn = document.querySelector("button"),
  output = document.querySelector("p.output"),
  outputDiv = document.querySelector("div.output");

let oldRandomNum = 0,
  oldRandomPink = 0,
  pinks = [
  "bg-pink-400",
  "bg-pink-500",
  "bg-pink-600",
  "bg-pink-700",
  "bg-pink-800"
];

btn.addEventListener("click", change);

function change(){
  changeText();
  changePink();
};

function changeText(){
  let newRandomNum = Math.floor(Math.random() * list.length);

  if (newRandomNum !== oldRandomNum){
    output.textContent = list[newRandomNum];
    oldRandomNum = newRandomNum;
  } else {
    changeText();
  };
};

function changePink(){
  let newRandomPink = Math.floor(Math.random() * pinks.length);

  if (newRandomPink !== oldRandomPink){
    outputDiv.classList.remove(pinks[oldRandomPink]);
    outputDiv.classList.add(pinks[newRandomPink]);
    oldRandomPink = newRandomPink;
  } else {
    changePink();
  };
};
