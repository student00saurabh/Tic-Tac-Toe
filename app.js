let n = 0;
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

let player1 = 1;
let player2 = 0;
let player3;

let num1 = 0;
let num2 = 0;
	
let h1 = document.querySelector("h1");
h1.innerText = "player1";
let h2 = document.querySelector("h2");
table.addEventListener("click", function (event) {
	if ((player1 == 1 && player2 == 0)&& (event.target.nodeName == "TD")) {
		h1.innerText = "player2";
		let abcd = event.target;
		abcd.style.color = "green"
		abcd.innerText = "x";
		player3 = player1;
		player1 = player2;
		player2 = player3;
		
	}
	else if((player1 == 0 && player2 == 1)&& (event.target.nodeName == "TD")){
		h1.innerText = "player1";
		let abc = event.target;
		abc.innerText = "0";
		abc.style.color = "red"
		player3 = player1;
		player1 = player2;
		player2 = player3;

	}

  if ((a1.innerText == "x")&&(a2.innerText=="x")&&(a3.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	  
	}
  else if ((a1.innerText == "0")&&(a2.innerText=="0")&&(a3.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((a1.innerText == "x")&&(b1.innerText=="x")&&(c1.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  btn.style.display = "block";
	  num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((a1.innerText == "0")&&(b1.innerText=="0")&&(c1.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}
	else if ((c1.innerText == "x")&&(c2.innerText=="x")&&(c3.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  btn.style.display = "block";
	  num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((c1.innerText == "0")&&(c2.innerText=="0")&&(c3.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		 
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}
	else if ((a3.innerText == "x")&&(b3.innerText=="x")&&(c3.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  btn.style.display = "block";
	  num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((a3.innerText == "0")&&(b3.innerText=="0")&&(c3.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}
	else if ((a1.innerText == "x")&&(b2.innerText=="x")&&(c3.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  btn.style.display = "block";
	  num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((a1.innerText == "0")&&(b2.innerText=="0")&&(c3.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}
	else if ((a3.innerText == "x")&&(b2.innerText=="x")&&(c1.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  btn.style.display = "block";
	  num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  num1 = num1 + 1;
		  sc1.innerText = num1;
		  sc2.innerText = num2;
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((a3.innerText == "0")&&(b2.innerText=="0")&&(c1.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}

	else if ((a2.innerText == "x")&&(b2.innerText=="x")&&(c2.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  btn.style.display = "block";
      num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		 
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((a2.innerText == "0")&&(b2.innerText=="0")&&(c2.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		 
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}
	else if ((b1.innerText == "x")&&(b2.innerText=="x")&&(b3.innerText == "x")){
	  h2.innerText = "Player1 is winner";
	  btn.style.display = "block";
	  num1 = num1 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		 
		  h1.innerText = "Player1";
		  player1 = 1;
		  player2 = 0;
	  })
	}
  else if ((b1.innerText == "0")&&(b2.innerText=="0")&&(b3.innerText == "0")){
	  h2.innerText = "Player2 is winner";
	  btn.style.display = "block";
	  num2 = num2 + 1;
		  sc1.innerText = num1;
	  sc2.innerText = num2;
	  n = 1;
	  btn.addEventListener("click", function () {
		  a1.innerText = " ";
		  a2.innerText = " ";
		  a3.innerText = " ";
		  b1.innerText = " ";
		  b2.innerText = " ";
		  b3.innerText = " ";
		  c1.innerText = " ";
		  c2.innerText = " ";
		  c3.innerText = " ";
		  h2.innerText = " ";
		  
		  h1.innerText = "Player2";
		  player1 = 1;
		  player2 = 0;
	  })
	}

})


btn.addEventListener("click", function (event) {
	h2.innerText = "Draw";
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
		h2.innerText = " ";
		h1.innerText = "Player1";
		player1 = 1;
		player2 = 0;
	}
	})