burger = document.querySelector(".burger");
nav_list = document.querySelector(".nav_list");
navbar = document.querySelector(".navbar");
nav_right = document.querySelector(".nav_right");


burger.addEventListener("click",()=>{
    nav_right.classList.toggle("v_class_resp");
    nav_list.classList.toggle("v_class_resp");
    navbar.classList.toggle("h_nav_resp");
})