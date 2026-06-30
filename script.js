const button = document.getElementById("loveButton");
const letter = document.getElementById("letter");

letter.style.display = "none";

button.addEventListener("click", function () {

    if(letter.style.display === "none"){

        letter.style.display = "block";

        button.innerHTML = "❤️ Close Letter";

    }else{

        letter.style.display = "none";

        button.innerHTML = "💌 Open My Heart";

    }

});
function updateTimer() {

const startDate = new Date("January 1, 2022 00:00:00");

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes = Math.floor((diff / (1000 * 60)) % 60);

const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("timer").innerHTML =

days + " Days ❤️ " +

hours + " Hours ❤️ " +

minutes + " Minutes ❤️ " +

seconds + " Seconds";

}

setInterval(updateTimer,1000);

updateTimer();function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,400);
function createStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(1+Math.random()*3)+"s";

document.querySelector(".stars").appendChild(star);

}

for(let i=0;i<250;i++){

createStar();

}