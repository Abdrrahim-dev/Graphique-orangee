let header = document.querySelector("header");
let links = header.querySelectorAll("a");

links.forEach((link) => {
  link.onclick = function () {
    links.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  };
});
