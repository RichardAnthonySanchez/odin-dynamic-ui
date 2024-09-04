import controllerPagination from "./controllerPagination";

function viewPagination(state) {
  let pages = [0, 1, 2];
  const slidesContent = document.querySelector(
    ".slides-container span:first-child"
  );

  slidesContent.innerHTML = state;

  controllerPagination(state, pages);
}
export default viewPagination;
