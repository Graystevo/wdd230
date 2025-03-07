document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
    const cards = document.querySelector('#cards');
  
    async function getProphetData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // For testing: console.table(data.prophets);
        displayProphets(data.prophets);
      } catch (error) {
        console.error("Error fetching the prophet data:", error);
      }
    }
  
    const displayProphets = (prophets) => {
      prophets.forEach((prophet) => {
        // Create the card container for each prophet
        let card = document.createElement('section');
  
        // Create an h2 element for the prophet's full name
        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create a container for additional details
        let details = document.createElement('div');
        details.classList.add('details');
  
        // Create and append each detail as a paragraph element
        let birthdate = document.createElement('p');
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
        details.appendChild(birthdate);
  
        // let death = document.createElement('p');
        // death.textContent = `Death: ${prophet.death}`;
        // details.appendChild(death);
  
        // let length = document.createElement('p');
        // length.textContent = `Length: ${prophet.length}`;
        // details.appendChild(length);
  
        // let order = document.createElement('p');
        // order.textContent = `Order: ${prophet.order}`;
        // details.appendChild(order);
  
        let birthplace = document.createElement('p');
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        details.appendChild(birthplace);
  
        // let numofchildren = document.createElement('p');
        // numofchildren.textContent = `Number of Children: ${prophet.numofchildren}`;
        // details.appendChild(numofchildren);
  
        // Create the image element for the prophet's portrait
        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
  
        // Append the full name and portrait to the card
        card.appendChild(fullName);
        card.appendChild(details);
        card.appendChild(portrait);

        // Finally, append the card to the main #cards container
        cards.appendChild(card);
      });
    };
  
    // Kick off the fetch and display process
    getProphetData();
  });
  