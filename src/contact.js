
export default function createContactPage() {
    const parentCont = document.querySelector(".main-content");

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-cont");
    let innerCont = document.createElement("div");
    let emailAddress = document.createElement("a");
    emailAddress.textContent = "contact@oka.com";
    emailAddress.href = "mailto:contact@oka.com";
    let phoneNumber = document.createElement("a");
    phoneNumber.textContent = "802-357-2686";
    phoneNumber.href = "tel:8023572686";
    let address = document.createElement("p");
    address.textContent = "78 NOTTINGHAM ROAD, JERUSHA CITY, MD, USA";

    parentCont.appendChild(contactContainer);
    contactContainer.appendChild(innerCont);
    innerCont.appendChild(emailAddress);
    innerCont.appendChild(phoneNumber);
    innerCont.appendChild(address);
}