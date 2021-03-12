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


/*Achtergronden veranderen op een bepaalde tijdstip*/
function time(){
	var current = new Date();
	var time = current.getHours();
		if (time >= 6 && time < 12){
			//Dag
			var bodyColor = document.getElementsByTagName("BODY")[0];
			bodyColor.style.backgroundImage = 'url("image/morning.jpg")';
		}
		else if (time >= 12 && time < 18 ){
			//Afternoon
			var bodyColor = document.getElementsByTagName("BODY")[0];
			bodyColor.style.backgroundImage = 'url("image/afternoon.jpg")';
		}
		else if (time >= 18 && time < 24){
			//Night
			var bodyColor = document.getElementsByTagName("BODY")[0];
			bodyColor.style.backgroundImage = 'url("image/night.jpg")';
		}
		else if (time >= 0 && time < 6){
			//Night
			var bodyColor = document.getElementsByTagName("BODY")[0];
			bodyColor.style.backgroundImage = 'url("image/night.jpg")';
		}
}

time();






