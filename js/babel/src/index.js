import "./style.css";

let container = document.getElementById("container");

let div = document.createElement("div");
div.textContent = "inserted by js";

container.appendChild(div);
