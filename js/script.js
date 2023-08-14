// toggle class aktif untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toogle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toogle class active untuk shopping cart button
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// // klik diluar elemen
const hmb = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const spc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hmb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!spc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
