addEventListener("DOMContentLoaded", (e)=>{
    let toggle = document.querySelector(".toggle");
    let main = document.querySelector(".main");
    let topbar = document.querySelector(".topbar");
    let navigation = document.querySelector(".navigation");
    toggle.addEventListener("click", (e)=>{
        toggle.classList.toggle('active');
        main.classList.toggle('active');
        topbar.classList.toggle('active');
        navigation.classList.toggle('active');
        
    })
})