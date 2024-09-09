import "./style.css";
import viewPagination from "./pagination/viewPagination";
import { autoAdvance } from "./pagination/controllerPagination";

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
  const defaultCarouselValue = 1;
  viewPagination(defaultCarouselValue);
}

document.body.appendChild(component());
