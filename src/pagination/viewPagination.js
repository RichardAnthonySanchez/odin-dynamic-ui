import controllerPagination from "./controllerPagination";

import Homepage from "../img/img-todoslist-homepage.png";
import ProjectManager from "../img/img-todoslist-projectmanager.png";
import TaskManager from "../img/img-todoslist-taskmanager.png";

function viewPagination(state) {
  let pages = [0, 1, 2];

  const positionOneContainer = document.querySelector(".position-one");
  const positionTwoContainer = document.querySelector(".position-two");
  const positionThreeContainer = document.querySelector(".position-three");

  const homepageImage = new Image();
  const projectManagerImage = new Image();
  const taskManagerImage = new Image();

  homepageImage.src = Homepage;
  projectManagerImage.src = ProjectManager;
  taskManagerImage.src = TaskManager;

  if (state === 1) {
    positionOneContainer.innerHTML = "";
    positionTwoContainer.innerHTML = "";
    positionThreeContainer.innerHTML = "";

    positionOneContainer.appendChild(homepageImage);
    positionTwoContainer.appendChild(projectManagerImage);
    positionThreeContainer.appendChild(taskManagerImage);
  } else if (state === 2) {
    positionOneContainer.innerHTML = "";
    positionTwoContainer.innerHTML = "";
    positionThreeContainer.innerHTML = "";

    positionOneContainer.appendChild(taskManagerImage);
    positionTwoContainer.appendChild(homepageImage);
    positionThreeContainer.appendChild(projectManagerImage);
  } else if (state === 0) {
    positionOneContainer.innerHTML = "";
    positionTwoContainer.innerHTML = "";
    positionThreeContainer.innerHTML = "";

    positionOneContainer.appendChild(projectManagerImage);
    positionTwoContainer.appendChild(taskManagerImage);
    positionThreeContainer.appendChild(homepageImage);
  } else {
    console.error(
      "there is a problem reading state. resetting to default values"
    );

    positionOneContainer.appendChild(homepageImage);
    positionTwoContainer.appendChild(projectManagerImage);
    positionThreeContainer.appendChild(taskManagerImage);
  }

  controllerPagination(state, pages);
}
export default viewPagination;
