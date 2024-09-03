import modelPagination from "./modelPagination";

function controllerPagination(state, pages) {
  document.addEventListener("click", function (e) {
    if (e.target.matches(".right")) {
      state = modelPagination(state, pages, "right");
    } else {
      state = modelPagination(state, pages, "left");
    }
    return state;
  });
}

export default controllerPagination;
