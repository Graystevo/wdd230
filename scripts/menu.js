

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".header-nav ul");

// Toggle menu on button click
menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

function handleResize() {
  const menu = document.querySelector(".header-nav ul");
  if (window.innerWidth > 500) {
    menu.classList.remove("hide");
//   } else {
//     menu.classList.add("hide");
  }
}


handleResize();
window.addEventListener("resize", handleResize);