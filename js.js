function toggleText() {
  const fullText = document.querySelector(".full-text");
  const button = document.querySelector(".toggle-text");

  fullText.classList.toggle("d-none");

  if (fullText.classList.contains("d-none")) {
    button.textContent = "Ver más";
  } else {
    button.textContent = "Ver menos";
  }
}
