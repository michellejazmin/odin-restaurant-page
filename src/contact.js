import "./style.css";

export default function loadContact() {
  const main = document.getElementById("main");
  const contact = document.createElement("section");
  contact.id = "contact";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Where to find us";
  contactTitle.classList.add("section-title");

  const address = document.createElement("p");
  address.textContent = "Address";
  address.classList.add("contact-info");

  const phone = document.createElement("p");
  const phoneLabel = document.createElement("span");
  phoneLabel.textContent = "Phone: ";
  const phoneNum = document.createElement("a");
  phoneNum.textContent = "123 456 789";
  phoneNum.setAttribute("href", "tel:+1123456789");
  phone.appendChild(phoneLabel);
  phone.appendChild(phoneNum);
  phone.classList.add("contact-info");

  const email = document.createElement("p");
  const emailLabel = document.createElement("span");
  emailLabel.textContent = "Email: ";
  const emailAddress = document.createElement("a");
  emailAddress.textContent = "email@antonios.com";
  emailAddress.setAttribute("href", "mailto:email@antonios.com");
  email.appendChild(emailLabel);
  email.appendChild(emailAddress);
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
