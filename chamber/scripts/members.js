document.addEventListener("DOMContentLoaded", () => {
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
        const section = document.createElement("section");
  
        const h3 = document.createElement("h3");
        h3.textContent = member.name;

        const img = document.createElement("img");
        img.src = `./images/${member.image}`;
        img.alt = `${member.name} Logo`;
        img.setAttribute("loading", "lazy");

        const details = document.createElement("div");
        details.classList.add("details");
  
        // Address detail
        const address = document.createElement("p");
        address.innerHTML = `${member.address}`;
        details.appendChild(address);
  
        // Phone number detail
        const phone = document.createElement("p");
        phone.innerHTML = `${member.phone}`;
        details.appendChild(phone);
  
        // // Membership level detail
        // const membership = document.createElement("p");
        // membership.innerHTML = `<strong>Membership Level:</strong> ${member.membership_level}`;
        // details.appendChild(membership);
  
        // // Industry detail
        // const industry = document.createElement("p");
        // industry.innerHTML = `<strong>Industry:</strong> ${member.industry}`;
        // details.appendChild(industry);
  
        const website = document.createElement("p");
        website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;
        details.appendChild(website);
  
        section.appendChild(h3);
        section.appendChild(img);
        section.appendChild(details);
  
        articleContainer.appendChild(section);
      });
    }
  
    getMemberData();
  });
  