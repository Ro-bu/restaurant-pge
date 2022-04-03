export default function createLander() {
    const parentCont = document.querySelector(".main-content");

    let mainCont = document.createElement("div");
    mainCont.classList.add("main-content-lander");
    let textCont = document.createElement("div");
    textCont.classList.add("text-content");
    let landerTitleCont = document.createElement("div");
    landerTitleCont.classList.add("lander-title-cont");
    let landerTitle = document.createElement("h1");
    landerTitle.textContent = "OKA BEACH RESTAURANT";
    let landerDescription = document.createElement("p");
    landerDescription.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero dolores tempora sequi dolorem quae! Magnam accusantium tempore tenetur assumenda amet at. Nulla harum commodi, corporis ab qui perspiciatis dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque dolores dolorem, omnis nostrum laboriosam quos ducimus, dignissimos quo neque facere recusandae itaque! Eum sed animi dolores tenetur quos ipsam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quo soluta praesentium animi nobis cumque harum fugit totam obcaecati. Voluptatum nobis inventore deleniti. Maiores, ex labore exercitationem repellat minus modi. Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    let landerButtonCont = document.createElement("div");
    landerButtonCont.classList.add("lander-button-cont");
    let button1 = document.createElement("button");
    button1.textContent = "BOOK A TABLE";
    let button2 = document.createElement("button");
    button2.textContent = "SEE THE MENU";
    let heroCont = document.createElement("div");
    heroCont.classList.add("lander-hero-cont");
    let heroImage = document.createElement("img");
    heroImage.src = "../src/img/naseem-buras-XHmq_LvACeE-unsplash.jpg";

    parentCont.appendChild(mainCont);
    mainCont.appendChild(textCont);
    textCont.appendChild(landerTitleCont);
    landerTitleCont.appendChild(landerTitle);
    textCont.appendChild(landerDescription);
    textCont.appendChild(landerButtonCont);
    landerButtonCont.appendChild(button1);
    landerButtonCont.appendChild(button2);
    mainCont.appendChild(heroCont);
    heroCont.appendChild(heroImage);
}