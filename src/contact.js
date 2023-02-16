export default function loadContact() {
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
