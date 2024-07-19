export default menuPageLoad;

const content = document.querySelector("#content");

const underConstruction = document.createElement("div");
underConstruction.classList.add("under-construction");
underConstruction.textContent = "Menu Under Construction";

function menuPageLoad() {
    // change page title
    document.querySelector("title").textContent = "Pizza the Hut - Menu";
    content.appendChild(underConstruction);
}
