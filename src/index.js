import "./styles.css";

import createHeaderFooter from "./headerfooter.js";
import createLander from "./lander.js";
import createContactPage from "./contact.js";
import {createMenu, clearMenu, createAppetizers, createMainDishes, createDesserts} from "./menu.js";



createHeaderFooter();

function clearContent() {
    document.querySelector(".main-content").innerHTML = "";
}
function landerInit() {
    createLander();
    let bookButton = document.querySelector(".lander-button-cont button:first-child");
    bookButton.addEventListener("click", () =>{
        clearContent();
        createContactPage();
    });
    let menuButton = document.querySelector(".lander-button-cont button:last-child");
    menuButton.addEventListener("click", () =>{
        clearContent();
        menuInit();
    });
};

landerInit();

function menuInit() {
    createMenu();
    createAppetizers();

    document.querySelector("#appetizers").addEventListener("click", () =>{
        clearMenu();
        createAppetizers();
    });
    document.querySelector("#main-dishes").addEventListener("click", function(){
        clearMenu();
        createMainDishes();
    });
    document.querySelector("#desserts").addEventListener("click", () =>{
        clearMenu();
        createDesserts();
    });
}

document.querySelector(".logo-cont").addEventListener("click", () =>{
    clearContent();
    landerInit();
});
document.querySelector(".header-menu p:first-child").addEventListener("click", () =>{
    clearContent();
    menuInit();
});
document.querySelector(".header-menu p:last-child").addEventListener("click", () =>{
    clearContent();
    createContactPage();
});