document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main-container");
  if (!main) return;

  let running = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !running) {
        running = true;
        main.classList.add("show");

        main.addEventListener('transitionend', function _onend() {
          running = false;
          main.removeEventListener('transitionend', _onend);
        });
      } else if (!entry.isIntersecting) {
        main.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(main);
});



document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".second-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add("show");
            }
            else{
                target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);
});

function clickButton(button){
    window.open("CV LIOW CHU FUNG.pdf", "_blank");
}