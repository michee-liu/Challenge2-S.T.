/*Klok*/
function clock(){
	let date = new Date();
	let hrs = date.getHours();
	let mins = date.getMinutes();
	let secs = date.getSeconds();
	
	let period = "AM";
	if (hrs == 0){
		hrs = 12;
	}else if (hrs >= 12){
		hrs = hrs - 12;
		period = "PM"
	}

	hrs = hrs < 10 ? "0" + hrs : hrs;
	mins = mins < 10 ? "0" + mins : mins;
	secs = secs < 10 ? "0" + secs : secs;

	let time = `${hrs}:${mins}:${secs}:${period}`;
	document.getElementById("clock").innerHTML = time;
	setTimeout(clock, 1000);
};

clock();

/*Datum*/
var today = new Date();
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();

/*achtergronden
var currentTime = new Date().getHours();
	if (5 <= currentTime&&currentTime < 11){
		document.body.className = "morning";
	}

	/*if (11 <= currentTime&&currentTime < 17){
		document.getElementByClassName("afternoon").display = "none";
	}

	if (17 <= currentTime&&currentTime < 23){
		document.getElementByClassName("night").display = "none";
	}



var currentTime = new Date().getHours();
	var d = new Date();
	var n = d.getHours();
	if(n > 18 || n < 6 )
		document.body.classList.contain = "night";
	else if (n > 13 && n < 18)
		document.body.className = "afternoon";
	else (n > 6 && n < 13)
		document.body.className = "day";

*/

function time(){
	var current = new Date();
	var time = current.getHours();
		if (time >= 6 && time <= 18){
			//Dag
			var bodyColor = document.getElementsByTagName("BODY")[0];
			bodyColor.style.backgroundImage = 'url("image/morning.jpg")';
		}
		else{
			//Night
			var bodyColor = document.getElementsByTagName("BODY")[0];
			bodyColor.style.backgroundImage = 'url("image/night/jpg")';
		}
}

time();






