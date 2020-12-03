let pathOpenEye = document.querySelector("#right-eye");
let pathClosedEye = document.querySelector("#closed-eye");
let logoSvg = document.querySelector("#logo");

logoSvg.addEventListener('click',()  => 
{pathOpenEye.style.display = "inline", pathClosedEye.style.display = "none"});