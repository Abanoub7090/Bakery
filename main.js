let header = document.querySelector("header");
let logo = document.querySelector(".logo-img");
let menuIcon = document.querySelector(".menu-icon i");
let menuMobile = document.querySelector(".mobile-menu");
let itmeM = document.querySelector(".itmeM");
let openbar = document.querySelector(".show-colors .open");
let colors = document.querySelectorAll(".colors span");
let toUp = document.querySelector(".toUp");
let lis = document.querySelectorAll("#main-menu li");
let section = document.querySelector(".static");
let nums = document.querySelectorAll(".static .num");
let started = false;

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((e) => {
      e.classList.remove("active");
    });
    li.classList.add("active");
  });
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  menuMobile.classList.toggle("active");
};
document.querySelector(".blogM").addEventListener("click", function (e) {
  e.preventDefault();
  itmeM.classList.toggle("show");
  document.querySelector(".blogM i").classList.toggle("rot");
});

window.addEventListener("scroll", () => {
  if (scrollY >= 200) {
    toUp.style.display = "grid";
    header.classList.add("scrolled");
    logo.setAttribute("src", "imgs/logo-1.png");
  } else {
    toUp.style.display = "none";
    header.classList.remove("scrolled");
    logo.setAttribute("src", "imgs/logo-2.png");
  }
});
openbar.onclick = () => {
  openbar.classList.toggle("bx-x");
  document.querySelector(".panel-open").classList.toggle("active");
};

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const colorA = color.getAttribute("data-color");
    document.documentElement.style.setProperty("--main-color", `${colorA}`);
  });
});

toUp.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

localStorage.clear