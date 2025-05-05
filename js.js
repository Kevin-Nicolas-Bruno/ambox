function toggleText() {
  const fullText = document.querySelector(".full-text");
  const button = document.querySelector(".toggle-text");

  fullText.classList.toggle("visible");

  if (fullText.classList.contains("visible")) {
    button.textContent = "Ver menos";
  } else {
    button.textContent = "Ver más";
  }
}
function handleResponsive() {
  const fullText = document.querySelector(".full-text");
  const button = document.querySelector(".toggle-text");
  const isMobile = window.matchMedia("(max-width: 767.98px)").matches;

  if (!isMobile) {
    fullText.classList.add("visible");
    button.textContent = "Ver más";
  } else {
  }
}

document.querySelectorAll(".touch-hover").forEach((container) => {
  container.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    if (!container.contains(e.target)) {
      container.classList.remove("active");
    }
  });
});
