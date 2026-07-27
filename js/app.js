// ===============================
// Apex Tech Academy
// app.js
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(255,152,0,0.4)";

    } else {

        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(".card");

function revealCards() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = "0.8s";

});

window.addEventListener("scroll", revealCards);

revealCards();

// ===============================
// Hero Text Animation
// ===============================

const heroTitle = document.querySelector(".hero-content h1");

if(heroTitle){

heroTitle.animate(

[
{opacity:0, transform:"translateY(-50px)"},
{opacity:1, transform:"translateY(0px)"}
],

{
duration:1500,
iterations:1
}

);

}

// ===============================
// Button Hover Animation
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ===============================
// Course List Animation
// ===============================

const courseItems=document.querySelectorAll(".course li");

courseItems.forEach((item,index)=>{

item.style.opacity="0";
item.style.transform="translateX(-30px)";

setTimeout(()=>{

item.style.opacity="1";
item.style.transform="translateX(0)";
item.style.transition="0.6s";

},300*index);

});

// ===============================
// Footer Year
// ===============================

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Apex Tech Academy | All Rights Reserved.";

}

// ===============================
// Welcome Message
// ===============================

window.onload=function(){

console.log("Welcome to Apex Tech Academy");

};
