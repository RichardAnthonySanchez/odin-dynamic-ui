import "./style.css";

function component() {
  document.addEventListener("click", function (e) {
    if (e.target.matches(".trigger")) {
      const trigger = e.target;
      const menuOptionsContainer = trigger.nextElementSibling;
      if (menuOptionsContainer.classList.contains("hidden")) {
        menuOptionsContainer.classList.remove("hidden");
      } else {
        menuOptionsContainer.classList.add("hidden");
      }
    }
  });
}

document.body.appendChild(component());
