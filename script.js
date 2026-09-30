var TO="vanshsaini9311@gmail.com";
var P=[
{t:"X (Twitter) Clone",d:"A clone of X's home feed: sidebar, composer, feed posts and a 'Today's News' panel.",s:["React","Express","Bootstrap"],c:"fullstack",i:"assets/twitter-clone.png",v:[{l:"Website demo",s:"assets/videos/twitter-website-demo.mp4"},{l:"Responsive demo",s:"assets/videos/twitter-responsive-demo.mp4"}],g:"X-Twitter-Clone-UI-UX-"},
{t:"Tic Tac Toe",d:"Two-player 3×3 game with turn tracking, win detection and a reset button.",s:["HTML","CSS","JavaScript"],c:"frontend",i:"assets/tic-tac-toe.png",v:[{l:"Working demo",s:"assets/videos/tic-tac-toe-demo.mp4"}],g:"Tic-Tac-Toe-Mini-Project-HTML-CSS-JAVASCRIPT-"},
{t:"Currency Converter",d:"Converts any amount between currencies using live exchange rates from a REST API.",s:["JavaScript","REST API"],c:"api",i:"assets/currency-converter.png",v:[{l:"Working demo",s:"assets/videos/currency-converter-demo.mp4"}],g:"Currency-Converter"},
{t:"Rock Paper Scissor",d:"Play against the computer with a live scoreboard and win/lose messages.",s:["HTML","CSS","JavaScript"],c:"frontend",i:"assets/rock-paper-scissor.png",v:[{l:"Working demo",s:"assets/videos/rock-paper-scissor-demo.mp4"}],g:"Rock-Paper-Scissor"}];
var F=[["all","All"],["frontend","Front-end"],["fullstack","Full-stack"],["api","API"]];
document.getElementById("fl").innerHTML=F.map(function(f,k){return '<button class="chip'+(k?'':' on')+'" data-f="'+f[0]+'">'+f[1]+'</button>'}).join("");
document.getElementById("pl").innerHTML=P.map(function(p,k){return '<article class="card proj" data-c="'+p.c+'"><div><span class="tag">project / 0'+(k+1)+'</span><h3>'+p.t+'</h3><p>'+p.d+'</p><div class="skills">'+p.s.map(function(x){return '<span class="chip">'+x+'</span>'}).join("")+'</div><div class="links"><a target="_blank" rel="noopener" href="https://github.com/legendcodrr9311/'+p.g+'">Source code ↗</a></div></div><div class="media" data-p="'+k+'"><div class="tabs"><button class="chip on" data-m="-1">Screenshot</button>'+(p.v||[]).map(function(v,j){return '<button class="chip" data-m="'+j+'">▶ '+v.l+'</button>'}).join("")+'</div><div class="shot"><img loading="lazy" src="'+p.i+'" alt="'+p.t+' screenshot"></div></div></article>'}).join("");
document.getElementById("fl").onclick=function(e){var b=e.target.closest("button");if(!b)return;document.querySelectorAll("#fl .chip").forEach(function(c){c.classList.toggle("on",c===b)});document.querySelectorAll(".proj").forEach(function(a){a.classList.toggle("hide",b.dataset.f!="all"&&a.dataset.c!=b.dataset.f)})};
var lb=document.getElementById("lb");document.getElementById("pl").onclick=function(e){var tb=e.target.closest(".tabs .chip");if(tb){var md=tb.closest(".media"),p=P[md.dataset.p],m=+tb.dataset.m;md.querySelectorAll(".tabs .chip").forEach(function(c){c.classList.toggle("on",c===tb)});document.querySelectorAll("#pl video").forEach(function(v){v.pause()});md.querySelector(".shot").className=m<0?"shot":"shot vid";md.querySelector(".shot").innerHTML=m<0?'<img src="'+p.i+'" alt="'+p.t+' screenshot">':'<video controls playsinline preload="metadata" src="'+p.v[m].s+'"></video>';return}var s=e.target.closest(".shot:not(.vid)");if(s){lb.querySelector("img").src=s.querySelector("img").src;lb.classList.add("on")}};lb.onclick=function(){lb.classList.remove("on")};document.onkeydown=function(e){if(e.key=="Escape")lb.classList.remove("on")};
var SK={HTML:"Semantic markup for every project.",CSS:"Layouts, responsive design and styling.",JavaScript:"Game logic, DOM updates and API calls.",React:"Component-based UI, used in the X clone.",Express:"Backend server for the X clone.",Bootstrap:"Fast, responsive layouts.","REST API":"Fetching live data, like exchange rates."};
var sk=document.getElementById("sk"),skd=document.getElementById("skd");sk.innerHTML=Object.keys(SK).map(function(k){return '<button class="chip" data-k="'+k+'">'+k+'</button>'}).join("");
sk.onclick=function(e){var b=e.target.closest("button");if(!b)return;sk.querySelectorAll(".chip").forEach(function(c){c.classList.toggle("on",c===b)});skd.textContent=SK[b.dataset.k]};
var W=["a Tic Tac Toe game","an X (Twitter) clone","a currency converter","a Rock Paper Scissor game"],wi=0,ci=0,del=false,ty=document.getElementById("ty");
(function tick(){var w=W[wi];ci+=del?-1:1;ty.textContent=w.slice(0,ci);var t=del?35:70;if(!del&&ci==w.length){del=true;t=1400}else if(del&&ci==0){del=false;wi=(wi+1)%W.length;t=300}setTimeout(tick,t)})();
var C=[
{t:"REST API (Intermediate)",d:"HackerRank · earned 29 Sep 2026",i:"assets/certs/restapi.jpg"},
{t:"JavaScript (Intermediate)",d:"HackerRank · earned 28 Sep 2026",i:"assets/certs/javascript.jpg"},
{t:"OCI Gen AI Professional",d:"Oracle Certified Professional · Sep 2025",i:"assets/certs/oracle_pro.jpg"},
{t:"OCI AI Foundations Associate",d:"Oracle Certified Foundations Associate · Sep 2025",i:"assets/certs/oracle_found.jpg"},
{t:"Data Science — Summer School",d:"Dronacharya College of Engineering · 2026",i:"assets/certs/internship.jpg"}];
document.getElementById("cg").innerHTML=C.map(function(c){return '<article class="card cert"><img loading="lazy" src="'+c.i+'" alt="'+c.t+' certificate"><div><h4>'+c.t+'</h4><p>'+c.d+'</p></div></article>'}).join("");
document.getElementById("cg").onclick=function(e){var im=e.target.closest("img");if(im){lb.querySelector("img").src=im.src;lb.classList.add("on")}};
var links=[].slice.call(document.querySelectorAll("nav a")),secs=links.map(function(a){return document.querySelector(a.getAttribute("href"))});
new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var i=secs.indexOf(x.target);links.forEach(function(l,k){l.classList.toggle("on",k==i)})}})},{rootMargin:"-45% 0px -50% 0px"}).observe&&secs.forEach(function(s){});
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var i=secs.indexOf(x.target);links.forEach(function(l,k){l.classList.toggle("on",k==i)})}})},{rootMargin:"-45% 0px -50% 0px"});secs.forEach(function(s){io.observe(s)});
var tb=document.getElementById("toast");function toast(m){tb.textContent=m;tb.classList.add("show");setTimeout(function(){tb.classList.remove("show")},3500)}
document.getElementById("sendBtn").addEventListener("click",function(e){e.preventDefault();var n=document.getElementById("n"),em=document.getElementById("e"),m=document.getElementById("m"),ok=true;
[[n,n.value.trim()],[em,/^\S+@\S+\.\S+$/.test(em.value)],[m,m.value.trim()]].forEach(function(p){var v=!!p[1];p[0].classList.toggle("err",!v);if(!v)ok=false});
if(!ok){toast("Please fill in every field with a valid email.");return}
var body="Name: "+n.value+"\nEmail: "+em.value+"\n\n"+m.value;
var mailUrl="mailto:"+TO+"?subject="+encodeURIComponent("Portfolio message from "+n.value)+"&body="+encodeURIComponent(body);
window.location.href=mailUrl;
toast("Opening your email app…")});
document.getElementById("yr").textContent=new Date().getFullYear();
