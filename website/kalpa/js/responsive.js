burger = document.querySelector(".burger");
navigation = document.querySelector(".navigation");
nav_list = document.querySelector(".nav_list");

burger.addEventListener("click",()=>{
    nav_list.classList.toggle("resp");
    navigator.classList.toggle("resp_nav");
})