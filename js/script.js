const addGuestButton = document.querySelector(".invite");
const guestInputLabel = document.querySelector(".add-guest label");
const guestInput = document.querySelector(".add-guest input");
const guestList = document.querySelector(".guest-list");
const guestCount = document.querySelector(".attendance");
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "ham and cheese sliders",
    "potato salad",
    "white sangria",
    "cucumber salad",
    "chicken sliders",
    "cowboy pasta salad",
    "lemon crumb bars",
    "seven layer dip",
    "oven baked hot dogs",
    "cowboy beans",
    "jamaican rum punch",
    "honey bun cake",
  ];
};

const allGuests = document.querySelectorAll(".guest-list li");
for (let guest of allGuests) {
  const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
  const randomPotLuckItem = potluckItems[randomPotluckIndex];
  const listItem = document.createElement("li");
  listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}.`;
  assignedItems.append(listItem);
}
