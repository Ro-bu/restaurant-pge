
export default function createHeaderFooter(){
    const CONTAINER = document.querySelector("#content");

    let header = document.createElement("div");
    header.classList.add("header");
    let headerLogoCont = document.createElement("div");
    headerLogoCont.classList.add("logo-cont");
    let logoText = document.createElement("p");
    logoText.textContent = "OKA";
    let headerMenuCont = document.createElement("div");
    headerMenuCont.classList.add("header-menu");
    let menuHeaderItem = document.createElement("p");
    menuHeaderItem.textContent = "MENU";
    let contactHeaderItem =  document.createElement("p");
    contactHeaderItem.textContent="CONTACT US";

    CONTAINER.appendChild(header);
    header.appendChild(headerLogoCont);
    header.appendChild(headerMenuCont);
    headerLogoCont.appendChild(logoText);
    headerMenuCont.appendChild(menuHeaderItem);
    headerMenuCont.appendChild(contactHeaderItem);

    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    CONTAINER.appendChild(mainContent);

    let footer = document.createElement("div");
    footer.classList.add("footer");
    let footerLeftCont = document.createElement("div");
    footerLeftCont.classList.add("footer-left");
    let footerLeftLeft = document.createElement("div");
    let footerLeftRight = document.createElement("div");
    let mondayFriday = document.createElement("p");
    mondayFriday.textContent = "MONDAY-FRIDAY";
    let weekdayOpen = document.createElement("p");
    weekdayOpen.textContent = "12:00-23:00";
    let weekends = document.createElement("p");
    weekends.textContent = "WEEKENDS";
    let weekendsOpen = document.createElement("p");
    weekendsOpen.textContent = "12:00-01:00";
    let footerRightCont = document.createElement("div");
    footerRightCont.classList.add("footer-right");
    let footerAddress = document.createElement("p");
    footerAddress.textContent = "78 NOTTINGHAM ROAD, JERUSHA CITY";
    let footerNumber = document.createElement("a");
    footerNumber.href = "tel:8023572686"
    footerNumber.textContent = "802-357-2686";

    CONTAINER.appendChild(footer);
    footer.appendChild(footerLeftCont);
    footerLeftCont.appendChild(footerLeftLeft);
    footerLeftLeft.appendChild(mondayFriday);
    footerLeftLeft.appendChild(weekdayOpen);
    footerLeftCont.appendChild(footerLeftRight);
    footerLeftRight.appendChild(weekends);
    footerLeftRight.appendChild(weekendsOpen);
    footer.appendChild(footerRightCont);
    footerRightCont.appendChild(footerAddress);
    footerRightCont.appendChild(footerNumber);

    return CONTAINER;
}
