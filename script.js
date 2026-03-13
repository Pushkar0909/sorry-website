document.addEventListener("DOMContentLoaded", function(){

/* MUSIC */

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", function(){
if(music){
music.play().catch(()=>{});
}
},{once:true});

/* POPUP */

window.openLetter = function(){
const letter = document.getElementById("letter");
if(letter) letter.style.display = "block";
}

window.closeLetter = function(){
const letter = document.getElementById("letter");
if(letter) letter.style.display = "none";
}

/* FORGIVE BUTTON */

window.forgive = function(){

for(let i=0;i<150;i++){

let heart=document.createElement("img");
heart.src="heart.png";
heart.className="heart";

heart.style.position="absolute";
heart.style.left=Math.random()*window.innerWidth+"px";
heart.style.top=Math.random()*window.innerHeight+"px";

document.body.appendChild(heart);

}

for(let i=0;i<100;i++){

let rose=document.createElement("img");
rose.src="rose.png";

rose.style.position="absolute";
rose.style.width="35px";

rose.style.left=Math.random()*window.innerWidth+"px";
rose.style.top=Math.random()*window.innerHeight+"px";

rose.style.animation="explode 2s ease-out forwards";

document.body.appendChild(rose);

}

let love=document.createElement("div");
love.className="loveText";
love.innerHTML="I LOVE YOU ❤️";

document.body.appendChild(love);

}

/* TYPEWRITER */

const text="I know I made mistakes but you are the most important person in my life ❤️ Please forgive me 🥺";
let i=0;

function typeWriter(){

const el=document.getElementById("typewriter");

if(el && i<text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,40);
}

}

typeWriter();

/* FLOATING HEARTS */

const hearts=document.getElementById("hearts");

if(hearts){

for(let i=0;i<80;i++){

let heart=document.createElement("img");
heart.src="heart.png";
heart.className="heart";

heart.style.left=Math.random()*100+"%";
heart.style.animationDuration=(Math.random()*5+5)+"s";

hearts.appendChild(heart);

}

}

/* FALLING ROSES */

const roses=document.getElementById("roses");

if(roses){

for(let i=0;i<100;i++){

let rose=document.createElement("img");
rose.src="rose.png";
rose.className="rose";

rose.style.left=Math.random()*100+"%";
rose.style.animationDuration=(Math.random()*5+5)+"s";

roses.appendChild(rose);

}

}

/* STARS */

const stars=document.getElementById("stars");

if(stars){

for(let i=0;i<150;i++){

let star=document.createElement("div");
star.className="star";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

stars.appendChild(star);

}

}

/* RUNNING NO BUTTON */

const noBtn=document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover", function(){

let x=Math.random()*window.innerWidth;
let y=Math.random()*window.innerHeight;

noBtn.style.position="absolute";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

}

});
