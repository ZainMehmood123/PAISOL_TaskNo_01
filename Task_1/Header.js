const nav = document.querySelector(".nav"),
  a = document.querySelector("#searchIcon"),
  b = document.querySelector(".navOpenBtn"),
  c = document.querySelector(".navCloseBtn");

a.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return a.classList.replace("uil-search", "uil-times");
  }
  a.classList.replace("uil-times", "uil-search");
});

b.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  a.classList.replace("uil-times", "uil-search");
});
c.addEventListener("click", () => {
  nav.classList.remove("openNav");
});