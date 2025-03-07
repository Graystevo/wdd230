const baseURL = "https://graystevo.github.io/wdd230/";
const linksURL = "https://graystevo.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  // For testing purposes, you might want to log the data:
  // console.log(data);
  displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
  // Select the ordered list within the Learning Activities section
  const olElement = document.querySelector("section.card ol");
  // Clear out any existing content
  olElement.innerHTML = "";

  // Loop through each week (each object in the array)
  weeks.forEach((week) => {
    const li = document.createElement("li");

    // Assuming each week has a "links" property that is an array of objects
    // with "url" and "title" keys.
    if (Array.isArray(week.links)) {
      week.links.forEach((link, index) => {
        const a = document.createElement("a");
        // If your URLs are relative and need the base URL, uncomment the line below:
        // a.href = baseURL + link.url;
        a.href = link.url;
        a.textContent = link.title;
        li.appendChild(a);

        // Add separator for multiple links
        if (index < week.links.length - 1) {
          li.appendChild(document.createTextNode(" | "));
        }
      });
    } else {
      // In case week.links is a single object rather than an array
      const a = document.createElement("a");
      a.href = week.links.url;
      a.textContent = week.links.title;
      li.appendChild(a);
    }

    olElement.appendChild(li);
  });
}

// Kick off the process
getLinks();
