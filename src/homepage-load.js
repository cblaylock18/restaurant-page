export default homepageLoad;
import mainImage from "./imgs/mainImage.webp";

function homepageLoad() {
    const content = document.querySelector("#content");

    const mainIcon = new Image();
    mainIcon.src = mainImage;
    content.appendChild(mainIcon);
}
