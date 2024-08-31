import "./style.css";

function component() {
  document.addEventListener("click", function (e) {
    if (e.target.matches(".menu-trigger")) {
      console.log("you clicked the trigger");
    }
  });
}

document.body.appendChild(component());
