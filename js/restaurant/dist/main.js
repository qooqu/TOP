(()=>{"use strict";const t=function(){let t=document.createElement("div");return t.textContent="home",t};let e=document.getElementById("container"),n=document.createElement("div"),d=document.createElement("div"),c=[t(),function(){let t=document.createElement("div");return t.textContent="about",t}(),function(){let t=document.createElement("div");return t.textContent="contact",t}()],o=function(t){let e=parseInt(t.target.dataset.index);for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(c[e])};["home","about","contact"].forEach(((t,e)=>{let d=document.createElement("button");d.setAttribute("data-index",e),d.addEventListener("click",o),d.textContent=t,n.appendChild(d)})),e.appendChild(n),d.appendChild(t()),e.appendChild(d)})();