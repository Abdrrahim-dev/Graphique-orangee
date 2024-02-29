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
//
// let cards = document.querySelectorAll(".card");
// let delay = 0;
// cards.forEach((ele) => {
//   delay += 0.1;
//   ele.transitionDelay = `${delay}s`;
//   ele.style.transform = "translateY(150px)";
//   ele.style.transition = "0.7s";
// });
// window.addEventListener("scroll", function () {
//   cards.forEach((ele) => {
//     if (ele.parentElement.parentElement.offsetTop - 100 < window.scrollY) {
//       ele.style.transform = "translateY(0)";
//     }
//   });
// });
