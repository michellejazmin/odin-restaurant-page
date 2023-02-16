/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
  const main = document.getElementById("main");
  const contact = document.createElement("section");
  contact.id = "contact";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Where to find us";
  contactTitle.classList.add("section-title");

  const address = document.createElement("p");
  // address.innerHTML = '<b>Adress:</b> Evergreen Terrace 123'
  address.textContent = "Address";
  address.classList.add("contact-info");

  const phone = document.createElement("p");
  // phone.innerHTML = "<b>Phone:</b> 555 123 456";
  phone.textContent = "Phone: 123 456 789";
  phone.classList.add("contact-info");

  const email = document.createElement("p");
  // email.innerHTML = "<b>Email:</b> <a type="email" href="mailto:">hello@antonios.it</a>";
  email.textContent = "email@antonios.com";
  email.classList.add("contact-info");

  contact.appendChild(contactTitle);
  contact.appendChild(address);
  contact.appendChild(phone);
  contact.appendChild(email);

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.appendChild(contact);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
  const main = document.getElementById("main");
  const home = document.createElement("section");
  home.id = "home";

  const homeTitle = document.createElement("h2");
  homeTitle.textContent = "Welcome to Antonio's";
  homeTitle.classList.add("section-title");

  const welcome = document.createElement("p");
  welcome.classList.add("section-text");
  welcome.textContent = "Generic copywriting about the restaurant";

  home.appendChild(homeTitle);
  home.appendChild(welcome);

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.appendChild(home);
}


/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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

  home.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
  menu.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
  contact.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
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

function loadPage() {
  createHeader();
  createMain();
  createFooter();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");


(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCOEI7QUFDQTtBQUNNOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsNkNBQVE7QUFDekMsaUNBQWlDLDZDQUFRO0FBQ3pDLG9DQUFvQyxnREFBVztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBUTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7QUM5RGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQyxxREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuXG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJXaGVyZSB0byBmaW5kIHVzXCI7XG4gIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi10aXRsZVwiKTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIC8vIGFkZHJlc3MuaW5uZXJIVE1MID0gJzxiPkFkcmVzczo8L2I+IEV2ZXJncmVlbiBUZXJyYWNlIDEyMydcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgLy8gcGhvbmUuaW5uZXJIVE1MID0gXCI8Yj5QaG9uZTo8L2I+IDU1NSAxMjMgNDU2XCI7XG4gIHBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogMTIzIDQ1NiA3ODlcIjtcbiAgcGhvbmUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mb1wiKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAvLyBlbWFpbC5pbm5lckhUTUwgPSBcIjxiPkVtYWlsOjwvYj4gPGEgdHlwZT1cImVtYWlsXCIgaHJlZj1cIm1haWx0bzpcIj5oZWxsb0BhbnRvbmlvcy5pdDwvYT5cIjtcbiAgZW1haWwudGV4dENvbnRlbnQgPSBcImVtYWlsQGFudG9uaW9zLmNvbVwiO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIHdoaWxlIChtYWluLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgfVxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuXG4gIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEFudG9uaW8nc1wiO1xuICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGl0bGVcIik7XG5cbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLXRleHRcIik7XG4gIHdlbGNvbWUudGV4dENvbnRlbnQgPSBcIkdlbmVyaWMgY29weXdyaXRpbmcgYWJvdXQgdGhlIHJlc3RhdXJhbnRcIjtcblxuICBob21lLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cbiAgd2hpbGUgKG1haW4uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICB9XG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZSk7XG59XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QmFyLmlkID0gXCJuYXYtYmFyXCI7XG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFyXCIpO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIG5hdkxpc3QuaWQgPSBcIm5hdi1saXN0XCI7XG4gIG5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdkxpc3RcIik7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChtZW51KTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lKTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE1lbnUpO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQ29udGFjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5pZCA9IFwibWFpblwiO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5pZCA9IFwiZm9vdGVyXCI7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWFpbigpO1xuICBjcmVhdGVGb290ZXIoKTtcbiAgbG9hZEhvbWUoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1lbnUuaWQgPSBcIm1lbnVcIjtcblxuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLXRpdGxlXCIpO1xuXG4gIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUdyaWQuY2xhc3NMaXN0LmFkZChcIm1lbnUtZ3JpZFwiKTtcblxuICBjb25zdCBkaXNoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICBjb25zdCBkaXNoVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBkaXNoVGl0bGUxLnRleHRDb250ZW50ID0gXCJQaXp6YVwiO1xuICBkaXNoMS5jbGFzc0xpc3QuYWRkKFwiZGlzaFwiKTtcbiAgZGlzaFRpdGxlMS5jbGFzc0xpc3QuYWRkKFwiZGlzaC10aXRsZVwiKTtcbiAgZGlzaDEuYXBwZW5kQ2hpbGQoZGlzaFRpdGxlMSk7XG5cbiAgY29uc3QgZGlzaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgY29uc3QgZGlzaFRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGlzaFRpdGxlMi50ZXh0Q29udGVudCA9IFwiU3BhZ2hldHRpIGFsbGEgY2FyYm9uYXJhXCI7XG4gIGRpc2gyLmNsYXNzTGlzdC5hZGQoXCJkaXNoXCIpO1xuICBkaXNoVGl0bGUyLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXRpdGxlXCIpO1xuICBkaXNoMi5hcHBlbmRDaGlsZChkaXNoVGl0bGUyKTtcblxuICBjb25zdCBkaXNoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICBjb25zdCBkaXNoVGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBkaXNoVGl0bGUzLnRleHRDb250ZW50ID0gXCJQaXp6YVwiO1xuICBkaXNoMy5jbGFzc0xpc3QuYWRkKFwiZGlzaFwiKTtcbiAgZGlzaFRpdGxlMy5jbGFzc0xpc3QuYWRkKFwiZGlzaC10aXRsZVwiKTtcbiAgZGlzaDMuYXBwZW5kQ2hpbGQoZGlzaFRpdGxlMyk7XG5cbiAgY29uc3QgbWVudUFycmF5ID0gW2Rpc2gxLCBkaXNoMiwgZGlzaDNdO1xuXG4gIGZvciAoY29uc3QgZGlzaCBvZiBtZW51QXJyYXkpIHtcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChkaXNoKTtcbiAgfVxuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51R3JpZCk7XG5cbiAgd2hpbGUgKG1haW4uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICB9XG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9sb2FkUGFnZVwiO1xuXG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9