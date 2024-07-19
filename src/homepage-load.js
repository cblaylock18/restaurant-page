export default homepageLoad;
import mainSource from "./imgs/mainImage.webp";
import pizzaSource from "./imgs/pizza.webp";
import mushroomSource from "./imgs/mushroom.png";

// Create html elements to populate the page

// images and logos
const content = document.querySelector("#content");
const mainIcon = new Image();
mainIcon.src = mainSource;
const pizza = new Image();
pizza.src = pizzaSource;

// restaurant name
const restaurantName = document.createElement("h1");
restaurantName.textContent = "Pizza the Hut";

//headers, hook, lists, etc.
// order pizza header below nav
const orderPizzaDiv = document.createElement("div");
orderPizzaDiv.classList.add("order");

const orderPizzaCarryOut = document.createElement("button");
orderPizzaCarryOut.textContent = "Carry Out";
const orderPizzaDelivery = document.createElement("button");
orderPizzaDelivery.textContent = "Delivery";

// restaurant review
const restaurantReview = document.createElement("div");
restaurantReview.classList.add("review");
restaurantReview.textContent =
    "Indulge in a slice of heaven at Pizza the Hut, where every pizza is crafted to perfection with the freshest ingredients. From classic pepperoni to gourmet specialties, our mouth-watering variety guarantees to satisfy your cravings. Come taste the difference at Pizza the Hut!";
const mushroom = new Image();
mushroom.src = mushroomSource;
const mushroom2 = new Image();
mushroom2.src = mushroomSource;

// restaurant hours
const restaurantHours = document.createElement("div");
restaurantHours.classList.add("hours");

const daysAndHours = {
    Monday: "6am to Midnight",
    Tuesday: "6am to Midnight",
    Wednesday: "6am to Midnight",
    Thursday: "6am to Midnight",
    Friday: "6am to 2am",
    Saturday: "8am to 2am",
    Sunday: "8am to 10pm",
};

for (const [day, hours] of Object.entries(daysAndHours)) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = day;

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours-per-day");
    hoursDiv.textContent = hours;

    restaurantHours.appendChild(dayDiv);
    restaurantHours.appendChild(hoursDiv);
}

// restaurant location
const restaurantLocation = document.createElement("div");
restaurantLocation.classList.add("location");
restaurantLocation.textContent =
    "123 Pizza Street, Pepperoniville, Mushroom State";

function homepageLoad() {
    // change page title
    document.querySelector("title").textContent = "Pizza the Hut - Home";

    // ordering pizza div directly below nav
    content.appendChild(restaurantName);
    content.appendChild(orderPizzaDiv);
    orderPizzaDiv.appendChild(orderPizzaCarryOut);
    orderPizzaDiv.appendChild(orderPizzaDelivery);
    content.appendChild(restaurantReview);
    content.appendChild(pizza);
    restaurantReview.appendChild(mushroom);
    restaurantReview.appendChild(mushroom2);
    content.appendChild(restaurantHours);
    content.appendChild(restaurantLocation);
}
