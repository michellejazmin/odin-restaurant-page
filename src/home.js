import "./style.css";
import Pizza from "./img/pizza.jpg";

export default function loadHome() {
  const main = document.getElementById("main");
  const home = document.createElement("section");
  home.id = "home";

  const homeTitle = document.createElement("h2");
  homeTitle.textContent = "Welcome to Antonio's";
  homeTitle.classList.add("section-title");

  const welcome = document.createElement("p");
  welcome.classList.add("section-text");
  welcome.textContent = "Generic copywriting about the restaurant";

  const photo = new Image();
  photo.src = Pizza;

  home.appendChild(homeTitle);
  home.appendChild(welcome);
  home.appendChild(photo);

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.appendChild(home);
}
