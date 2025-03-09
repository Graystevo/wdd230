document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the local JSON file
    const url = "./data/members.json";
    const cards = document.querySelector("#cards");
  
    async function getMemberData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // For testing: console.table(data.companies);
        displayMembers(data.companies);
      } catch (error) {
        console.error("Error fetching the member data:", error);
      }
    }
  
    const displayMembers = (members) => {
      members.forEach((member) => {
        // Create a container for each member card
        let card = document.createElement("section");
        card.classList.add("member-card");
  
        // Company name as header
        let nameEl = document.createElement("h2");
        nameEl.textContent = member.name;
  
        // Create a details container for additional info
        let details = document.createElement("div");
        details.classList.add("details");
  
        // Address
        let address = document.createElement("p");
        address.textContent = `Address: ${member.address}`;
        details.appendChild(address);
  
        // Phone number
        let phone = document.createElement("p");
        phone.textContent = `Phone: ${member.phone}`;
        details.appendChild(phone);
  
        // Website URL as a clickable link
        let website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";
        details.appendChild(website);
  
        // Membership level
        let membership = document.createElement("p");
        membership.textContent = `Membership: ${member.membership_level}`;
        details.appendChild(membership);
  
        // Additional information (e.g., industry and founded year)
        let industry = document.createElement("p");
        industry.textContent = `Industry: ${member.industry}`;
        details.appendChild(industry);
  
        let founded = document.createElement("p");
        founded.textContent = `Founded: ${member.founded}`;
        details.appendChild(founded);
  
        // Company image or icon
        let img = document.createElement("img");
        // Assuming your images are in an "images" folder relative to your HTML file.
        img.setAttribute("src", `./images/${member.image}`);
        img.setAttribute("alt", `Logo for ${member.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "150");
        img.setAttribute("height", "150");
  
        // Assemble the card elements
    
        card.appendChild(nameEl);
        card.appendChild(img);
        card.appendChild(details);
        
  
        // Append the card to the main container
        cards.appendChild(card);
      });
    };
  
    // Kick off the fetch and display process
    getMemberData();
  });
  