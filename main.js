// EDIT LIST HERE

let list = [
  "Lick your finger",
  "Grab your boobs over the clothes and send a photo",
  "Do a slow moan",
  "Lick your finger and then circle your tits with that finger, send a photo",
  "Put one finger completely inside your pussy, keep going in and out slowly while you try to hold a conversation for 1 minute",
  "You got lucky, you get to ask for a close picture of the other persons tip",
  "Pull up your clothes to reveal whatever is underneath",
  "Rub your clit 5 times and moan",
  "Press on your pussy but from the back of your legs",
  "Touch yourself lightly over your clothes",
  "Send a photo of your panties",
  "Send a photo of your bra",
  "You are saved! No dare this time.",
  "Slowly pull up your tshirt using both hands, record that and send",
  "Lick a piece of ice and touch it lightly on both of your tits for 1 second",
  "Rub a piece of cloth over your pusy",
  "Stand wearing your top half and no bottom half, only show your legs",
  "Circle your clit over your panties",
  "Insert your pinky inside you and wiggle a little while you squeeze",
  "Show your ass, no clothing",
  "Get any object, like a pen and play with your pussy using that. Send a photo of that object", 
  "Keep wearing your panties and a tshirt/top, send a photo of your ass but bend down a little"
  
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
