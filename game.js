
//start Game

window.onload = function() {
  Start();
};


function Start(){
	
		for (var i = 1; i <= 9; i = i + 1){
			reset(i);
		}
		document.turn = "X";
		if (Math.random() < 0.3){
			document.turn = "O";
		}
		document.winner = null;
		Setinfo(document.turn + " To start. ");
	}

//User Message

function Setinfo(msg){
	document.getElementById('info').innerText = msg;
}

//validate table movement

function nextmove(table){
	if (document.winner != null){
		alert(document.winner + " Already won!!!");
	}else if (table.innerText == ""){
		table.innerText = document.turn;
		changeturn();
	} else {
		alert("Worng Move!!.");
	}
}

//Change turn

function changeturn(){
	if (checkwinner(document.turn)) {
		alert("Congratulations "  + document.turn + " You win!");
		document.winner = document.turn;
	} else if (document.turn == "X"){
		document.turn = "O";
	} else {
		document.turn = "X";
	}
	Setinfo(document.turn + "'s turn!");
}

//Validate winning combaination 

function checkwinner(move){
	var result = false;
	if ( checkwin(1, 2, 3, move) || checkwin(4, 5, 6, move) || checkwin(7, 8, 9, move) ||checkwin(1, 4, 7, move) ||checkwin(2, 5, 8, move) ||checkwin(3, 6, 9, move) ||checkwin(1, 5, 9, move) ||checkwin(3, 5, 7, move) ){
		result = true;
	}
	return result;
}


//Check winner

function checkwin(g, i, e, move){
	var result = false;
	if (gettable(g) == move && gettable(i) == move && gettable(e) == move){
		return true;
	}
	return result;
}

function gettable(number){
	return document.getElementById("td" + number).innerText;
}

//reset game

function reset(number){
	document.getElementById("td" + number).innerText = "";

}


document.getElementById("clear").addEventListener("click", Start);
