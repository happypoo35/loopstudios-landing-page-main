const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", (e) => {
  if (e.target.classList[0] === "link" || e.target.classList[0] === "logo") {
    menu.classList.remove("active");
  }
});
