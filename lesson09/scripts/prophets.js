const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // Check the output in the console (remove or comment this out when done testing)
//   console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create the card container for each prophet
    let card = document.createElement("section");
    // Create an h2 element for the prophet's full name
    let fullName = document.createElement("h2");
    // Create the image element for the prophet's portrait
    let portrait = document.createElement("img");

    // Populate the h2 with the full name using a template literal
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Set up the image with required attributes
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Build the card by appending the full name and image elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append the complete card to the div with id "cards"
    cards.appendChild(card);
  });
};

getProphetData();
