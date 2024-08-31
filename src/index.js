import "./style.css";

function component() {
  document.addEventListener("click", function (e) {
    if (e.target.matches(".menu-trigger")) {
      const menuOptionsContainer = document.querySelector(".menu-options");
      if (menuOptionsContainer.classList.contains("hidden")) {
        menuOptionsContainer.classList.remove("hidden");
      } else {
        menuOptionsContainer.classList.add("hidden");
      }
    }
  });
}

document.body.appendChild(component());
