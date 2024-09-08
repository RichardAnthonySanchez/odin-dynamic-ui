import modelPagination from "./modelPagination";
import viewPagination from "./viewPagination";

function controllerPagination(state, pages) {
  document.addEventListener("click", function (e) {
    if (e.target.matches(".carousel-right")) {
      state = modelPagination(state, pages, "right");
    } else if (e.target.matches(".carousel-left")) {
      state = modelPagination(state, pages, "left");
    } else if (e.target.id === "nav1") {
      state = 0;
    } else if (e.target.id === "nav2") {
      state = 1;
    } else if (e.target.id === "nav3") {
      state = 2;
    }
    console.log("state has been updated to " + state);
    viewPagination(state);
    return state;
  });
}

export default controllerPagination;
