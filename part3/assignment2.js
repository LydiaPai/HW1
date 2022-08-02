let mobileMenu = document.querySelector(".mobile-menu");
let sidebar = document.querySelector(".side_desktop-menu");

mobileMenu.addEventListener("click", () => {
  sidebar.style.display = "block";
});

document.querySelector(".btn_close").addEventListener("click", () => {
  sidebar.style.display = "none";
});
console.log(document.querySelector(".btn_close"));
console.log(sidebar);
