var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");
 hamburger.addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("hover_collapse");
    document.querySelector(".bars").classList.toggle("fa-bars");
    document.querySelector(".bars").classList.toggle("fa-times-circle");
})