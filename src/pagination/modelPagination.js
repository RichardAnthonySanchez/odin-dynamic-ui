function modelPagination(state, pages, input) {
  if (input === "right") {
    if (state++ > pages.length + 1) {
      state = pages[0];
    } else {
      state = state++;
    }
  } else {
    if (state-- < pages[0]) {
      state = pages.length + 1;
    } else {
      state = state--;
    }
  }
  return state;
}

export default modelPagination;
