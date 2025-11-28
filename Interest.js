document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".exercises-section");

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
    const target = document.querySelector(".passion");

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
    const target = document.querySelector(".free-time");

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
    const target = document.querySelector(".ambition");

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