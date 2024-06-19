
let arrayImagens = ["baek.jpg", "bae.jpg", "byeon.jpg", "queen.jpeg", "seo yea.jpg", "i.jpg"];
let i = 0;
let intervalo;

window.onload = function () {

	let img = document.getElementsByTagName('img');

	img[0].src = "img/" + arrayImagens[0];
	img[1].src = "img/" + arrayImagens[0];
	img[2].src = "img/" + arrayImagens[1];
	img[3].src = "img/" + arrayImagens[2];
	img[4].src = "img/" + arrayImagens[3];
	img[5].src = "img/" + arrayImagens[4];
	img[6].src = "img/" + arrayImagens[5];
}



function img() {
	let img = document.getElementsByTagName('img');
	
	img[0].src = "img/" + arrayImagens[i];
	i++;
	if (i >= 6) {
		i = 0;
	}
}

function stop (){
	clearInterval(intervalo);
	console.log("slide parado");
}

function play (){
	intervalo = setInterval(img,2000);
	console.log("slide iniciado");
}

function img01() {
	let img = document.getElementsByTagName('img');
	img[0].src = "img/" + arrayImagens[0];
}

function img02() {
	let img = document.getElementsByTagName('img');
	img[0].src = "img/" + arrayImagens[1];
}

function img03() {
	let img = document.getElementsByTagName('img');
	img[0].src = "img/" + arrayImagens[2];
}
function img04() {
	let img = document.getElementsByTagName('img');
	img[0].src = "img/" + arrayImagens[3];
}

function img05() {
	let img = document.getElementsByTagName('img');
	img[0].src = "img/" + arrayImagens[4];
}

function img06() {
	let img = document.getElementsByTagName('img');
	img[0].src = "img/" + arrayImagens[5];
}

intervalo = setInterval(img,2000);


