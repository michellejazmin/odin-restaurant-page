import "./style.css";

export default function loadMenu() {
  const main = document.getElementById("main");
  const menu = document.createElement("section");
  menu.id = "menu";

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Our Menu";
  menuTitle.classList.add("section-title");

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const dish1 = document.createElement("article");
  const dishTitle1 = document.createElement("h3");
  dishTitle1.textContent = "Pizza";
  dish1.classList.add("dish");
  dishTitle1.classList.add("dish-title");
  dish1.appendChild(dishTitle1);

  const dish2 = document.createElement("article");
  const dishTitle2 = document.createElement("h3");
  dishTitle2.textContent = "Spaghetti alla carbonara";
  dish2.classList.add("dish");
  dishTitle2.classList.add("dish-title");
  dish2.appendChild(dishTitle2);

  const dish3 = document.createElement("article");
  const dishTitle3 = document.createElement("h3");
  dishTitle3.textContent = "Pizza";
  dish3.classList.add("dish");
  dishTitle3.classList.add("dish-title");
  dish3.appendChild(dishTitle3);

  const menuArray = [dish1, dish2, dish3];

  for (const dish of menuArray) {
    menuGrid.appendChild(dish);
  }

  menu.appendChild(menuTitle);
  menu.appendChild(menuGrid);

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.appendChild(menu);
}
