//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
var allpages=document.querySelectorAll(".page");


//select all subtopic pages
function hideall(){ //function to hide all pages
	for(let onepage of allpages){ //go through all subtopic pages
		onepage.style.display="none"; //hide it
	}
}
function show(pgno){ //function to show selected page no
	hideall();
	//select the page based on the parameter passed in
	let onepage=document.querySelector("#page"+pgno);
	onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
	show(1);
});
page2btn.addEventListener("click", function () {
	show(2);
});
page3btn.addEventListener("click", function () {
	show(3);
});
page4btn.addEventListener("click", function () {
	show(4);
});
hideall();

/*HamMenu */
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);
function toggleMenus(){ /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to close menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
}
}

/* fox*/
const foxId = document.getElementById("foxId");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveFox() {
foxId.style.left = GetRandom(0, 500) + "px";
foxId.style.top = GetRandom(0, 500) + "px";
}
var moveFoxItvId = setInterval(MoveFox, 1000);

const scoreBox=document.getElementById("scoreBox");

const popAudio = new Audio("fox.mp3");
//create an new Audio Object using sound file

var score=0; //to track how many clicks
function foxCatch() {
//increases score after clicking
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
popAudio.play(); //play the audio!
}
//link durian to mouseclick to durianCatch function
foxId.addEventListener("click",foxCatch);

document.addEventListener("keydown",function(evt){
	console.log(evt);
	if(evt.code=="KeyT"){
	foxId.classList.add("shrink");
	}
	if(evt.code=="KeyU"){
	foxId.classList.remove("shrink");
	}
		if(evt.code=="KeyA"){
	foxId.classList.add("anim1");
	}
	if(evt.code=="KeyS"){
	foxId.classList.remove("anim1");
}
});