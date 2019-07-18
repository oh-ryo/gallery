for(let i = 0, len = menulist.length; i < len; i++) {
    const slide = document.createElement("li");
    slide.classList.add(menulist[i]);
    slide.innerHTML = "<img src=\"img/" + menulist[i] + ".jpg\">";
    document.getElementsByClassName("slider-inner") [0].appendChild(slide);
    const nav = document.createElement("li");
    nav.classList.add("dot" + (i+1));
    nav.setAttribute("data-nav-index", i);
    document.getElementsByClassName("nav") [0].appendChild(nav);
}

const leng = menulist.length - 1; 
const imageslide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
const dotnavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
let nowindex = 0;
imageslide[nowindex].classList.add("show");
imageslide[nowindex].classList.add("current");
let ischanging = false;
let slidetimer;
let index = 0; 

function sliderSlide(val) {
    if(ischanging === true){
        return false;
    }
    ischanging = true;
    imageslide[nowindex].classList.remove("show");
    dotnavigation[nowindex].classList.remove("current");
    nowindex = val;
    imageslide[nowindex].classList.add("show");
    dotnavigation[nowindex].classList.add("current");
    slidetimer = setTimeout(function(){
        ischanging = false;
    }, 600);
}


document.getElementById("arrow-prev").addEventListener("click", function(){
    index = nowindex - 1;
    if(index < 0){
        index = leng;
    }
    sliderSlide(index);
}, false);

document.getElementById("arrow-next").addEventListener("click", function(){
    index = nowindex + 1;
    if(index > leng){
        index = 0;
    }
    sliderSlide(index);
}, false);

for(let i = 0; i < dotnavigation.length; i++){
    dotnavigation[i].addEventListener("click", function(){
        index = Number(this.getAttribute("data-nav-index"));
        sliderSlide(index);
    }, false);
}

function slideauto() {
    index = nowindex + 1;
    if(index > leng){
        index = 0;
    }
    sliderSlide(index);
    index++;
}
let timer = 0;
window.onload = function time(){
    timer = setInterval(slideauto, 3000);
}