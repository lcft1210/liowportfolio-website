const gallery = document.querySelector(".bsbcc-gallery");
const back = document.getElementById("btn__back");
const forward = document.getElementById("btn__forward");

forward.addEventListener("click", () => {
  gallery.scrollBy({ left: 400, behavior: "smooth" });
});

back.addEventListener("click", () => {
  gallery.scrollBy({ left: -400, behavior: "smooth" });
});

let currentSlide = 0;
const slider2 = document.querySelector(".sourc-gallery");
const totalSlides2 = document.querySelectorAll(".slide").length;

document.getElementById("btn__forward2").addEventListener("click", () => {
  if (currentSlide < totalSlides2 - 1) {
    currentSlide++;
    slider2.style.transform = `translateX(-${currentSlide * 750}px)`;
  }
});

document.getElementById("btn__back2").addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    slider2.style.transform = `translateX(-${currentSlide * 750}px)`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".second-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".third-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".fourth-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".fifth-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);
});


document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".sixth-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".seventh-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);
});





