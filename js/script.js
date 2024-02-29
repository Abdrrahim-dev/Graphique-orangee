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

//
let bars = document.querySelector(".bars");
let home = document.querySelector(".home");
bars.addEventListener("click", function () {
  header.classList.toggle("phone");
  let headerPhone = document.querySelector("header.phone");
  headerPhone.style.display = "flex";
  home.style.visibility = "hidden";
});
//
let exit = header.querySelector(".exit");
exit.addEventListener("click", function () {
  header.classList.remove("phone");
  header.style.display = "none";
  home.style.visibility = "visible";
});
