import "./style.css";
import logoSource from "./imgs/fork.svg";
import HomePage from "./homepage-load.js";
import MenuPage from "./menupage-load.js";
import background from "./imgs/background.webp";

const backgroundDiv = document.createElement("div");
backgroundDiv.classList.add("background");
backgroundDiv.style.backgroundImage = `url(${background})`;
document.body.prepend(backgroundDiv);

const logo = new Image();
logo.src = logoSource;

const nav = document.querySelector("nav");
nav.prepend(logo);

HomePage();
