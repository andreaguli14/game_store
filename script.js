var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");
hamburger.addEventListener("click", () => {
  document.querySelector(".wrapper").classList.toggle("hover_collapse");
  document.querySelector(".content").classList.toggle("contentresize");
})


const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
}