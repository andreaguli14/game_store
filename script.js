let hamburger = document.querySelector(".hamburger");
let wrapper = document.querySelector(".wrapper");
let content = document.querySelector(".content");


hamburger.addEventListener("click", () => {
  wrapper.classList.toggle("hover_collapse");
  content.classList.toggle("contentresize");
})

const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
}