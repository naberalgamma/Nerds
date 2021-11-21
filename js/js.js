let link = document.querySelector(".contact-link");
let container = document.querySelector(".modal-content");
let close = container.querySelector(".modal-content-close");
let form = container.querySelector(".login-form");
let userName = container.querySelector(".user-name");
let contact = container.querySelector(".user-contact");
let text = container.querySelector(".user-text");
let storageName = localStorage.getItem("userName");
let storageContact = localStorage.getItem(".user-contact");


link.addEventListener("click", function(event) {
    event.preventDefault();
    container.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    container.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
    if(event.keyCode === 27){
        if(container.classList.contains("modal-content-show")){
            container.classList.remove("modal-content-show");
        }
    }
});
let active = document.querySelector(".active");
let newActive = document.querySelector(".new-active");
let bascketActive = document.querySelector(".bascket-active");

newActive.addEventListener("click", function(){
        active.classList.remove("active");
        newActive.classList.add("active");
});
bascketActive.addEventListener("click", function(){ 
    if(active.classList.contains("active")){
        active.classList.remove("active");
        bascketActive.classList.add("active");
    }
        else if(newActive.classList.contains("active")){
            newActive.classList.remove("active");
            bascketActive.classList.add("active");
        }
        else if(bascketActive.classList.contains("active")){
            bascketActive.classList.remove("active");
            newActive.classList.add("active");
        }
});


let toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function(){
    if (window.scrollY > 300) {
        toTop.classList.add("to-topp");
    } else if (window.scrollY < 300) {
        toTop.classList.remove("to-topp");
    }
});
toTop.addEventListener("click", function(){
    window.scroll(0, 0);
});

let linkBascket = document.querySelector(".bascket");
let containerBascket = document.querySelector(".modal-content-bascket");
let closeBascket = document.querySelector(".modal-content-bascket-close");

linkBascket.addEventListener("click", function(event) {
    event.preventDefault();
    containerBascket.classList.add("modal-content-bascket-show");
});

closeBascket.addEventListener("click", function(event) {
    event.preventDefault();
    containerBascket.classList.remove("modal-content-bascket-show");
});
window.addEventListener("keydown", function(event){
    if(event.keyCode === 27){
        if(containerBascket.classList.contains("modal-content-bascket-show")){
            containerBascket.classList.remove("modal-content-bascket-show");
        }
    }
});

