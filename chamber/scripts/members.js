document.addEventListener("DOMContentLoaded", () => {
    // Fetch the member data from the JSON file in the "data" folder
    const url = "./data/members.json";
    const articleContainer = document.querySelector("article");
  
    async function getMemberData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.companies);
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    }
  
    function displayMembers(members) {
      members.forEach((member) => {
        // Create a section element for each company (member)
        const section = document.createElement("section");
  
        // Create an image element
        const img = document.createElement("img");
        // Assumes images are stored in an "images" folder
        img.src = `./images/${member.image}`;
        img.alt = `${member.name} Logo`;
        img.setAttribute("loading", "lazy");
  
        // Create an h3 element for the company name
        const h3 = document.createElement("h3");
        h3.textContent = member.name;
  
        // Create a paragraph element for the founded year (mimics the year display)
        const p = document.createElement("p");
        p.textContent = member.founded;
  
        // Create a link element for details (using the company website)
        const a = document.createElement("a");
        a.href = member.website;
        a.target = "_blank";
        a.textContent = "Details";
  
        // Append elements to the section in order (to match the layout)
        section.appendChild(img);
        section.appendChild(h3);
        section.appendChild(p);
        section.appendChild(a);
  
        // Append the section to the main article container
        articleContainer.appendChild(section);
      });
    }
  
    // Start fetching and displaying member data
    getMemberData();
  });
  