export default function loadHome() {
  const main = document.getElementById("main");
  const home = document.createElement("section");

  const homeTitle = document.createElement("h2");
  homeTitle.textContent = "Welcome to Antonio's";

  const welcome = document.createElement("p");
  welcome.classList.add("welcome");
  welcome.textContent = "Generic copywriting about the restaurant";

  home.appendChild(homeTitle);
  home.appendChild(welcome);

  main.appendChild(home);
}
