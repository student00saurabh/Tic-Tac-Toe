let n = false;
let table = document.querySelector(".game");

let row1 = document.querySelector(".row1");
let row2 = document.querySelector(".row2");
let row3 = document.querySelector(".row3");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");

let btn = document.querySelector("button");
let sc1 = document.querySelector(".rec-1");
let sc2 = document.querySelector(".rec-2");

let tds = document.querySelectorAll("td")

let audio1 = document.querySelector(".audio1");
let audio2 = document.querySelector(".audio2");
let audioDiv = document.querySelector(".audio-div");

// const names = require("./app.js");
// console.log(names[0]);
// console.log(names[1]);

let player1 = 1;
let player2 = 0;
let player3;

let num1 = 0;
let num2 = 0;

audio_play = false;

function audiofn(){
	audio1.style.display = "block";	
	audio1.autoplay = true;
}

function clickaudio(){
    audio2.style.display = "block";
	audio2.autoplay = true;
}

audioDiv.addEventListener("click", ()=>{
	if(audio_play == true){
		audioDiv.innerText = "Off";
		audio1.setAttribute("src", " ");	
		audio2.setAttribute("src", "sound.wav");
		audio_play = false;
	}
	else if(audio_play == false){
		audioDiv.innerText = "On";
		audio1.setAttribute("src", "bgm1.mp3");
		audio2.setAttribute("src", " ");
		audio_play = true;
	}
})

btn.addEventListener("click", (event)=>{
	n = true;
	clickaudio();
	audiofn();
    let img = document.querySelector(".win-img");
	img.style.display = "none";
	table.style.display = "block";
    btn.innerText = "start";
	if (event.target.nodeName == "BUTTON") {
		a1.innerText = " ";
		a2.innerText = " ";
		a3.innerText = " ";
		b1.innerText = " ";
		b2.innerText = " ";
		b3.innerText = " ";
		c1.innerText = " ";
		c2.innerText = " ";
		c3.innerText = " ";
		h1.innerText = "Player1";
		h2.innerText = " ";
		player1 = 1;
		player2 = 0;
	}
})

	
let h1 = document.querySelector("h1");
h1.innerText = "player1: 0";
let h2 = document.querySelector("h2");
table.addEventListener("click", function (event) {
	if ((player1 == 1 && player2 == 0)&& (event.target.nodeName == "TD") && (n ==true)) {
		h1.innerText = "player2: x";
		clickaudio();
		let abcd = event.target;
		abcd.style.color = "green"
		abcd.innerText = "x";
		player3 = player1;
		player1 = player2;
		player2 = player3;
		
	}
	else if((player1 == 0 && player2 == 1)&& (event.target.nodeName == "TD")){
		h1.innerText = "player1: 0";
		clickaudio();
		let abc = event.target;
		abc.innerText = "0";
		abc.style.color = "red"
		player3 = player1;
		player1 = player2;
		player2 = player3;

	}

function player1Win(){
	n = false;
	let img = document.querySelector(".win-img");
	img.style.display = "block";
	table.style.display = "none";
	btn.innerText = "Replay";
	h2.innerText = "Player1 is winner";
	num1 = num1 + 1;
	sc1.innerText = num1;
	sc2.innerText = num2;
	n = 1;
		a1.innerText = " ";
		a2.innerText = " ";
		a3.innerText = " ";
		b1.innerText = " ";
		b2.innerText = " ";
		b3.innerText = " ";
		c1.innerText = " ";
		c2.innerText = " ";
		c3.innerText = " ";
		h1.innerText = "Player1: x";
		player1 = 1;
		player2 = 0;
}

function player2Win(){
	n = false;
	let img = document.querySelector(".win-img");
	img.style.display = "block";
    table.style.display = "none";
	btn.innerText = "Replay";
	h2.innerText = "Player2 is winner";
	num2 = num2 + 1;
	sc1.innerText = num1;
	sc2.innerText = num2;
	n = 1;
		a1.innerText = " ";
		a2.innerText = " ";
		a3.innerText = " ";
		b1.innerText = " ";
		b2.innerText = " ";
		b3.innerText = " ";
		c1.innerText = " ";
		c2.innerText = " ";
		c3.innerText = " ";
		h1.innerText = "Player2: 0";
		player1 = 1;
		player2 = 0;
}

  if ((a1.innerText == "x")&&(a2.innerText=="x")&&(a3.innerText == "x")){
	player1Win();
	}
  else if ((a1.innerText == "0")&&(a2.innerText=="0")&&(a3.innerText == "0")){
	 player2Win();
	}
  else if ((a1.innerText == "x")&&(b1.innerText=="x")&&(c1.innerText == "x")){
	 player1Win();
	}
  else if ((a1.innerText == "0")&&(b1.innerText=="0")&&(c1.innerText == "0")){
	player2Win();
	}
	else if ((c1.innerText == "x")&&(c2.innerText=="x")&&(c3.innerText == "x")){
		player1Win();
	}
  else if ((c1.innerText == "0")&&(c2.innerText=="0")&&(c3.innerText == "0")){
	player2Win();
	}
	else if ((a3.innerText == "x")&&(b3.innerText=="x")&&(c3.innerText == "x")){
		player1Win();
	}
  else if ((a3.innerText == "0")&&(b3.innerText=="0")&&(c3.innerText == "0")){
	player2Win();
	}
	else if ((a1.innerText == "x")&&(b2.innerText=="x")&&(c3.innerText == "x")){
		player1Win();
	}
  else if ((a1.innerText == "0")&&(b2.innerText=="0")&&(c3.innerText == "0")){
	player2Win();
	}
	else if ((a3.innerText == "x")&&(b2.innerText=="x")&&(c1.innerText == "x")){
		player1Win();
	}
  else if ((a3.innerText == "0")&&(b2.innerText=="0")&&(c1.innerText == "0")){
	player2Win();
	}
	else if ((a2.innerText == "x")&&(b2.innerText=="x")&&(c2.innerText == "x")){
		player1Win();
	}
   else if ((a2.innerText == "0")&&(b2.innerText=="0")&&(c2.innerText == "0")){
	player2Win();
	}
	else if ((b1.innerText == "x")&&(b2.innerText=="x")&&(b3.innerText == "x")){
		player1Win();
	}
   else if ((b1.innerText == "0")&&(b2.innerText=="0")&&(b3.innerText == "0")){
	player2Win();
	}
   
})
