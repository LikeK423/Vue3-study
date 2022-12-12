import "../css/style.css"
import "../css/title.less"
import "../css/img.css"

import imgUrl from "../img/1.jpg"

const div = document.createElement("div")
div.className = "title";
div.innerHTML = "Hello Word"


const bg = document.createElement('div');
bg.innerHTML = "Hello Word"
bg.className = "img-bg";

const img = document.createElement('img');
img.src = imgUrl

document.body.appendChild(div);
document.body.appendChild(bg);
document.body.appendChild(img);