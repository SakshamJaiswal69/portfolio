/* ==========================
   Scroll Reveal Animation
========================== */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("h3,p,ul,ol,li,hr").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});


/* ==========================
   Floating Project Titles
========================== */

document.querySelectorAll("section > li").forEach(title => {

    title.addEventListener("mouseenter", () => {

        title.style.transform = "translateY(-5px)";
        title.style.textShadow = "0 0 20px gold";

    });

    title.addEventListener("mouseleave", () => {

        title.style.transform = "translateY(0px)";
        title.style.textShadow = "none";

    });

});


/* ==========================
   Scroll Progress Bar
========================== */

const progress = document.createElement("div");

progress.id = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});


/* ==========================
   Scroll To Top Button
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   Mouse Glow
========================== */

const glow = document.createElement("div");

glow.id = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


/* ==========================
   Ripple Effect
========================== */

document.querySelectorAll("a,button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const x=e.clientX-btn.offsetLeft;

const y=e.clientY-btn.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/* ==========================
   Active Heading Highlight
========================== */

const headings=document.querySelectorAll("h3");

window.addEventListener("scroll",()=>{

let scrollPos=window.scrollY;

headings.forEach(h=>{

const offset=h.offsetTop-150;

if(scrollPos>=offset){

headings.forEach(x=>x.style.color="#FFD700");

h.style.color="#ffffff";

}

});

});


/* ==========================
   Random Glow Pulse
========================== */

setInterval(()=>{

document.querySelector("section").style.boxShadow=

"0 0 "+(25+Math.random()*25)+"px rgba(255,215,0,.25)";

},1200);


/* ==========================
   Console Message
========================== */

console.log("%cWelcome Recruiter 👋",

"color:gold;font-size:18px;font-weight:bold;");

console.log("%cDeveloped by Saksham Jaiswal",

"color:white;font-size:14px;");
const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

navbar.style.padding="12px 8%";

navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

}

else{

navbar.style.padding="18px 8%";

navbar.style.boxShadow="none";

}

});