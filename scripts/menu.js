const menuButton = document.querySelector(".header-nav #menu");
const menu = document.querySelector(".header-nav .navigation");

// Toggle menu on button click
menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuButton.classList.toggle("open");
});

function handleResize() {
  const menu = document.querySelector(".navigation");
  if (window.innerWidth >= 840) {
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
