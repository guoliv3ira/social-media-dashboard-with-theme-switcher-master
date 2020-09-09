const togglebtn = document.querySelector(".toggle-btn");
const header = document.querySelector("header");
const socialCard = document.querySelectorAll(".social-stat-card");
const body = document.querySelector("body");
const overview = document.querySelector(".overview");
const cardOver = document.querySelector(".cards-overview");

console.log(togglebtn);
console.log(socialCard);

togglebtn.addEventListener("click", () => {
  if (togglebtn.checked == true) {
    header.classList.remove("header-light");
    for (let cardso of socialCard) {
      cardso.classList.remove("social-stat-card-light");
    }
    body.classList.remove("body-light");
    overview.classList.remove("overview-light");
    cardOver.classList.remove("cards-overview-light");
  } else {
    header.classList.add("header-light");
    for (let cardso of socialCard) {
      cardso.classList.add("social-stat-card-light");
    }
    body.classList.add("body-light");
    overview.classList.add("overview-light");
    cardOver.classList.add("cards-overview-light");
  }
});
