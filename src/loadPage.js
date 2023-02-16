import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.getElementById("content");

function createHeader() {
  const header = document.createElement("header");
  header.id = "header";
  header.classList.add("header");

  const navBar = document.createElement("nav");
  navBar.id = "nav-bar";
  navBar.classList.add("navBar");

  const navList = document.createElement("ul");
  navList.id = "nav-list";
  navList.classList.add("navList");

  const home = document.createElement("li");
  home.classList.add("nav-item");
  home.textContent = "Home";

  const menu = document.createElement("li");
  menu.classList.add("nav-item");
  menu.textContent = "Menu";

  const contact = document.createElement("li");
  contact.classList.add("nav-item");
  contact.textContent = "Contact";

  navList.appendChild(home);
  navList.appendChild(menu);
  navList.appendChild(contact);
  navBar.appendChild(navList);
  header.appendChild(navBar);
  content.appendChild(header);

  home.addEventListener("click", loadHome);
  menu.addEventListener("click", loadMenu);
  contact.addEventListener("click", loadContact);
}

function createMain() {
  const main = document.createElement("main");
  main.id = "main";
  main.classList.add("main");
  content.appendChild(main);
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.id = "footer";
  footer.classList.add("footer");
  content.appendChild(footer);
}

export default function loadPage() {
  createHeader();
  createMain();
  createFooter();
  loadHome();
}
