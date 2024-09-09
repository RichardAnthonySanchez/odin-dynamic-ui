import { controllerPagination, autoAdvance } from "./controllerPagination";

import Homepage from "../img/img-todoslist-homepage.png";
import ProjectManager from "../img/img-todoslist-projectmanager.png";
import TaskManager from "../img/img-todoslist-taskmanager.png";

function viewPagination(state) {
  let viewAutoAdvance;
  let pages = [0, 1, 2];

  const nav1 = document.getElementById("nav1");
  const nav2 = document.getElementById("nav2");
  const nav3 = document.getElementById("nav3");

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

    nav1.checked = false;
    nav2.checked = true;
    nav3.checked = false;
  } else if (state === 2) {
    positionOneContainer.innerHTML = "";
    positionTwoContainer.innerHTML = "";
    positionThreeContainer.innerHTML = "";

    positionOneContainer.appendChild(taskManagerImage);
    positionTwoContainer.appendChild(homepageImage);
    positionThreeContainer.appendChild(projectManagerImage);

    nav1.checked = false;
    nav2.checked = false;
    nav3.checked = true;
  } else if (state === 0) {
    positionOneContainer.innerHTML = "";
    positionTwoContainer.innerHTML = "";
    positionThreeContainer.innerHTML = "";

    positionOneContainer.appendChild(projectManagerImage);
    positionTwoContainer.appendChild(taskManagerImage);
    positionThreeContainer.appendChild(homepageImage);

    nav1.checked = true;
    nav2.checked = false;
    nav3.checked = false;
  } else {
    console.error(
      "there is a problem reading state. resetting to default values"
    );

    positionOneContainer.appendChild(homepageImage);
    positionTwoContainer.appendChild(projectManagerImage);
    positionThreeContainer.appendChild(taskManagerImage);

    nav1.checked = false;
    nav2.checked = true;
    nav3.checked = false;
  }

  controllerPagination(state, pages);

  // set interval, in this case, changes state in unexpected ways over time
  // likely due to circular dependecy (controller to view and view to controller)
  // also we aren't storing and overriding the state, we've been making dupes (unrealiable if multiple methods are changing state)
  //setInterval(() => autoAdvance(state, pages), 5000);
}
export default viewPagination;
