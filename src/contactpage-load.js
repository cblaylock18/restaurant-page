export default contactPageLoad;

const content = document.querySelector("#content");

const underConstruction = document.createElement("div");
underConstruction.classList.add("under-construction");
underConstruction.textContent = "Contact Under Construction";

function contactPageLoad() {
    // change page title
    document.querySelector("title").textContent = "Pizza the Hut - Contact";
    content.appendChild(underConstruction);
}
