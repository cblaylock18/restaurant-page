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

//headers, hook, lists, etc.
// order pizza header below nav
const orderPizzaDiv = document.createElement("div");
orderPizzaDiv.classList.add("order");

const orderPizzaCarryOut = document.createElement("button");
orderPizzaCarryOut.textContent = "Carry Out";
const orderPizzaDelivery = document.createElement("button");
orderPizzaDelivery.textContent = "Delivery";

// restaurant name
const restaurantName = document.createElement("h1");
restaurantName.textContent = "Pizza the Hut";

// restaurant review
const restaurantReview = document.createElement("div");
restaurantReview.classList.add("review");
restaurantReview.textContent =
    "Indulge in a slice of heaven at Pizza the Hut, where every pizza is crafted to perfection. Our deliciously cheesy creations, topped with the freshest ingredients, are guaranteed to satisfy your cravings. From classic pepperoni to gourmet specialties, we offer a mouth-watering variety that will leave you coming back for more. Join us for an unforgettable dining experience, where great taste meets great service. Come taste the difference at Pizza the Hut!";
const mushroom = new Image();
mushroom.src = mushroomSource;

// restaurant hours
const restaurantHours = document.createElement("div");
restaurantHours.classList.add("hours");

const daysAndHours = {
    Monday: "6am - Midnight",
    Tuesday: "6am - Midnight",
    Wednesday: "6am - Midnight",
    Thursday: "6am - Midnight",
    Friday: "6am - 2am",
    Saturday: "8am - 2am",
    Sunday: "8am - 10pm",
};

for (const [day, hours] of Object.entries(daysAndHours)) {
    const dayHours = document.createElement("div");
    dayHours.textContent = `${day}: ${hours}`;
    restaurantHours.appendChild(dayHours);
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
    content.appendChild(orderPizzaDiv);
    orderPizzaDiv.appendChild(orderPizzaCarryOut);
    orderPizzaDiv.appendChild(orderPizzaDelivery);
    content.appendChild(restaurantName);
    content.appendChild(restaurantReview);
    restaurantReview.appendChild(mushroom);
    restaurantReview.appendChild(mushroom);
    content.appendChild(restaurantHours);
    content.appendChild(restaurantLocation);
}
