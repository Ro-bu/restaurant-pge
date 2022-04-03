function createMenu() {
    const parentCont = document.querySelector(".main-content");

    let menuCont = document.createElement("div");
    menuCont.classList.add("menu-cont");
    let menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    let appetizers = document.createElement("p");
    appetizers.setAttribute("id", "appetizers");
    appetizers.textContent = "APPETIZERS";
    let mainDishes = document.createElement("p");
    mainDishes.setAttribute("id", "main-dishes");
    mainDishes.textContent = "MAIN DISHES";
    let desserts = document.createElement("p");
    desserts.setAttribute("id", "desserts");
    desserts.textContent = "DESSERTS";
    let menuInnerCont = document.createElement("div");
    menuInnerCont.classList.add("menu-inner-cont");

    parentCont.appendChild(menuCont);
    menuCont.appendChild(menuHeader);
    menuHeader.appendChild(appetizers);
    menuHeader.appendChild(mainDishes);
    menuHeader.appendChild(desserts);
    menuCont.appendChild(menuInnerCont);
}

function clearMenu() {
    const menuCont = document.querySelector(".menu-inner-cont");
    menuCont.innerHTML = "";
    let appetizers = document.querySelector("#appetizers");
    appetizers.classList.remove("menu-active");
    let mainDishes = document.querySelector("#main-dishes");
    mainDishes.classList.remove("menu-active");
    let desserts = document.querySelector("#desserts");
    desserts.classList.remove("menu-active");
}

function createAppetizers() {
    let parentCont = document.querySelector(".menu-inner-cont");
    let appetizers = document.querySelector("#appetizers");
    appetizers.classList.add("menu-active");

    let itemName1 = document.createElement("p");
    itemName1.textContent = "FRIED SQUID SALAD";
    let itemPrice1 = document.createElement("span");
    itemPrice1.textContent = "12";
    let itemName2 = document.createElement("p");
    itemName2.textContent = "SHRIMP RAVIOLI";
    let itemPrice2 = document.createElement("span");
    itemPrice2.textContent = "15";
    let itemName3 = document.createElement("p");
    itemName3.textContent = "PAN SEARED COD";
    let itemPrice3 = document.createElement("span");
    itemPrice3.textContent = "9";

    parentCont.appendChild(itemName1);
    parentCont.appendChild(itemPrice1);
    parentCont.appendChild(itemName2);
    parentCont.appendChild(itemPrice2);
    parentCont.appendChild(itemName3);
    parentCont.appendChild(itemPrice3);
}

function createMainDishes() {
    let parentCont = document.querySelector(".menu-inner-cont");
    let mainDishes = document.querySelector("#main-dishes");
    mainDishes.classList.add("menu-active");

    let itemName1 = document.createElement("p");
    itemName1.textContent = "BAKED QUAIL";
    let itemPrice1 = document.createElement("span");
    itemPrice1.textContent = "21";
    let itemName2 = document.createElement("p");
    itemName2.textContent = "OCTOPUS PASTA";
    let itemPrice2 = document.createElement("span");
    itemPrice2.textContent = "25";
    let itemName3 = document.createElement("p");
    itemName3.textContent = "LOBSTER SPECIAL";
    let itemPrice3 = document.createElement("span");
    itemPrice3.textContent = "59";

    parentCont.appendChild(itemName1);
    parentCont.appendChild(itemPrice1);
    parentCont.appendChild(itemName2);
    parentCont.appendChild(itemPrice2);
    parentCont.appendChild(itemName3);
    parentCont.appendChild(itemPrice3);
}

function createDesserts() {
    let parentCont = document.querySelector(".menu-inner-cont");
    let desserts = document.querySelector("#desserts");
    desserts.classList.add("menu-active");

    let itemName1 = document.createElement("p");
    itemName1.textContent = "CANDY SUSHI";
    let itemPrice1 = document.createElement("span");
    itemPrice1.textContent = "8";
    let itemName2 = document.createElement("p");
    itemName2.textContent = "BANANA SPLIT";
    let itemPrice2 = document.createElement("span");
    itemPrice2.textContent = "8";
    let itemName3 = document.createElement("p");
    itemName3.textContent = "SEAWEED TIRAMISU";
    let itemPrice3 = document.createElement("span");
    itemPrice3.textContent = "9";

    parentCont.appendChild(itemName1);
    parentCont.appendChild(itemPrice1);
    parentCont.appendChild(itemName2);
    parentCont.appendChild(itemPrice2);
    parentCont.appendChild(itemName3);
    parentCont.appendChild(itemPrice3);
}

export {createMenu, clearMenu, createAppetizers, createMainDishes, createDesserts};