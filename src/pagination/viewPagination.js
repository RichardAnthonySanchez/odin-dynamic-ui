import controllerPagination from "./controllerPagination";

function viewPagination() {
  let state = 1;
  let pages = [0, 1, 2];
  const slidesContent = document.querySelector(
    ".slides-container span:first-child"
  );

  slidesContent.innerHTML = state;

  // send default values to the controller for further processing
  // controllerPagination(state, pages)
}
export default viewPagination;
