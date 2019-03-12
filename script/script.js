function leadingZero(number){
	if(number < 10){
		return '0'+number;
	}
	else{
		return number;
	}
}

function clock(){
	var today = new Date();

	//Dag van de week
	var dagen = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

	var formatDay = (dagen[today.getDay()-1]);
	document.getElementById('dag').innerHTML = formatDay;

	//Datum
	var formatDate = leadingZero(today.getDate()) +'-'+ leadingZero(today.getMonth()) +'-'+ today.getFullYear();
	document.getElementById('date').innerHTML = formatDate;

	//Tijd
	var formatTime = today.getHours() +':'+ leadingZero(today.getMinutes()) +':'+ leadingZero(today.getSeconds());
	document.getElementById('clock').innerHTML = formatTime;
}
setInterval(clock, 1000);

//Achtergrond verandering
var now = new Date();
var hours = now.getHours();

//18-8 night
if (hours > 17 && hours < 9){
 document.write ('<html style="background-image: url(img/nacht.jpeg);">');
}
//9-17 day
else if (hours > 8 && hours < 18){
 document.write ('<html style="background-image: url(img/ochtend.jpg);">');
}
else {
 document.write ('<html style="background-color: #99ddff">');
}

//Animatie
window.onload = function(){

	var timeline = new TimelineMax({repeat: -1});
	timeline.to("#clock", 50, {ease: Elastic.easeOut.config(10), y:6});
	// timeline.to("#clock", 1, {ease: Elastic.easeout});
};

// var tl1 = new TimelineMax();
// tl1.to(mainHeading, 1, {top: '50%', ease: Elastic.easeOut});
