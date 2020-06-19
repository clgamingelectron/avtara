// EDIT LIST HERE

let list = [
  "Show your pussy halfway",
  "Show your pussy halfway",
  "Do a slow moan",
  "Lick your finger and then circle your tits with that finger, send a photo",
  "Show your pussy halfway",
  "You got lucky, you get to ask for a close picture of the other persons tip",
  "Pull up your clothes to reveal whatever is underneath",
  "Show your pussy halfway",
  "Press on your pussy but from the back of your legs",
  "Touch yourself lightly over your clothes",
  "Show your pussy halfway",
  "Show your pussy halfway",
  "Show your pussy halfway.",
  "Slowly pull up your tshirt using both hands, record that and send",
  "Show your pussy halfway",
  "Rub a piece of cloth over your pusy",
  "Show your pussy halfway",
  "Circle your clit over your panties",
  "Show your pussy halfway",
  "Show your ass, no clothing",
  "Show your pussy halfway", 
  "Show your pussy halfway"
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
