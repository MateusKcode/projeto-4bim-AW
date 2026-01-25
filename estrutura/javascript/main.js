window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.querySelector(".menu").classList.add("fixo");
  }
});
