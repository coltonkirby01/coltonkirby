(()=>{"use strict";
const header=document.querySelector(".site-header"),menu=document.querySelector(".menu-button"),drawer=document.querySelector(".drawer"),shade=document.querySelector(".drawer-overlay"),closeDrawerButton=document.querySelector(".close-drawer");
const searchButton=document.querySelector(".search-button"),searchBack=document.querySelector(".search-back"),searchForm=document.querySelector(".search-form"),searchInput=document.querySelector(".search-input"),results=document.querySelector(".search-results"),prefix=document.documentElement.dataset.prefix||"./";
const pages=[["Colton Kirby","","Biography, philosophy, theology, metaphysics, epistemology, Aristotelianism"],["CV","cv/","Curriculum Vitae"],["Research","research/","Published research and future research interests"],["Teaching","teaching/","Courses taught and courses I could teach"],["Links","links/","Future Projects, Graduate Schools, Catholic and Orthodox considerations, Mapping Academic Thomism"]];
function updateHeader(){header.classList.toggle("scrolled",window.scrollY>8)}updateHeader();window.addEventListener("scroll",updateHeader,{passive:true});
function closeDrawer(){drawer.classList.remove("open");shade.classList.remove("open");menu.setAttribute("aria-expanded","false");document.body.style.overflow=""}
function openDrawer(){drawer.classList.add("open");shade.classList.add("open");menu.setAttribute("aria-expanded","true");document.body.style.overflow="hidden";closeDrawerButton.focus()}
menu.addEventListener("click",openDrawer);shade.addEventListener("click",closeDrawer);closeDrawerButton.addEventListener("click",()=>{closeDrawer();menu.focus()});
drawer.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeDrawer));
function closeSearch(){header.classList.remove("searching");searchButton.setAttribute("aria-expanded","false");searchInput.value="";results.replaceChildren();results.classList.remove("open");searchButton.focus()}
searchButton.addEventListener("click",()=>{closeDrawer();header.classList.add("searching");searchButton.setAttribute("aria-expanded","true");searchInput.focus()});searchBack.addEventListener("click",closeSearch);
function search(){const q=searchInput.value.trim().toLowerCase();results.replaceChildren();if(!q){results.classList.remove("open");return}
const matched=pages.filter(([title,path,desc])=>(title+" "+desc).toLowerCase().includes(q));if(!matched.length){const p=document.createElement("p");p.textContent="No matching pages.";results.appendChild(p)}
for(const [title,path,desc] of matched){const a=document.createElement("a");a.href=prefix+path;const strong=document.createElement("strong");strong.textContent=title;const small=document.createElement("span");small.textContent=desc;a.append(strong,small);results.appendChild(a)}results.classList.add("open")}
searchInput.addEventListener("input",search);searchForm.addEventListener("submit",e=>{e.preventDefault();search();const links=results.querySelectorAll("a");if(links.length===1)location.href=links[0].href});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(header.classList.contains("searching"))closeSearch();else if(drawer.classList.contains("open")){closeDrawer();menu.focus()}}});
})();
