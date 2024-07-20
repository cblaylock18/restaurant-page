import "./style.css";
import logoSource from "./imgs/fork.svg";
import homePage from "./homepage-load.js";
import menuPage from "./menupage-load.js";
import contactPage from "./contactpage-load.js";
import background from "./imgs/background.webp";

const backgroundDiv = document.createElement("div");
backgroundDiv.classList.add("background");
backgroundDiv.style.backgroundImage = `url(${background})`;
document.body.prepend(backgroundDiv);

const logo = new Image();
logo.src = logoSource;

const logo2 = new Image();
logo2.src = logoSource;

const nav = document.querySelector("nav");
nav.prepend(logo);
nav.appendChild(logo2);

const content = document.querySelector("#content");

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

function selectNewTab(event) {
    // delete all children of content
    while (content.hasChildNodes() === true) {
        content.lastChild.remove();
    }

    if (event.target.classList.contains("home")) {
        homePage();
    } else if (event.target.classList.contains("menu")) {
        menuPage();
    } else if (event.target.classList.contains("contact")) {
        contactPage();
    }
}

let buttonArray = [homeBtn, menuBtn, contactBtn];

buttonArray.forEach((button) => {
    button.addEventListener("click", selectNewTab);
});

homePage();
