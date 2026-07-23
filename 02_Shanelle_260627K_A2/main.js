//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page5btn=document.querySelector("#page5btn");
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
page5btn.addEventListener("click", function () {
	show(5);
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
foxId.style.top = GetRandom(0, 430) + "px";
}
/*in validator it said "'moveFoxItvId' is defined but never used." but it is to make the fox move*/
var moveFoxItvId = setInterval(MoveFox, 1000);

const scoreBox=document.getElementById("scoreBox");

const popAudio = new Audio("audio/fox.mp3");
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

/* Full screen */
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
document.documentElement.requestFullscreen();
}
function exitFullscreen() {
document.exitFullscreen();
}

/*Quiz*/
const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4,score=0;
function CheckAns(){
score=0; //reset score to 0, check ans and give score if correct
//read the value of the selected radio button for q1
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1); //check q1 value retrieved
if(q1=="Cheese")score++;
//read the value of the selected radio button for q2
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2); //check q2 value retrieved
if(q2=="Scream")score++;
scorebox.innerHTML="Score:"+score;
q3=document.querySelector("input[name='q3']:checked").value;
console.log(q3); //check q3 value retrieved
if(q3=="Islandfox")score++;
scorebox.innerHTML="Score:"+score;
q4=document.querySelector("input[name='q4']:checked").value;
console.log(q4); //check q4 value retrieved
if(q4=="Eurasia")score++;
scorebox.innerHTML="Score:"+score;
}