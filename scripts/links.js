const baseURL = "https://graystevo.github.io/wdd230/";
const linksURL = "https://graystevo.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  // For testing purposes, you might want to log the data:
  // console.log(data);
  displayLinks(data.lessons);
}

getLinks();

function displayLinks(lessons) {
  const olElement = document.querySelector("section.card ol");
  olElement.innerHTML = "";

  lessons.forEach(lesson => {
    const li = document.createElement("li");
    
    // Prepend the lesson number (e.g., "Lesson 02: ")
    const lessonSpan = document.createElement("span");
    lessonSpan.textContent = "Lesson " + lesson.lesson + ": ";
    li.appendChild(lessonSpan);

    // Loop through each link for this lesson
    lesson.links.forEach((link, index) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.title;
      li.appendChild(a);

      // Add a separator if there are multiple links
      if (index < lesson.links.length - 1) {
        li.appendChild(document.createTextNode(" | "));
      }
    });
    
    olElement.appendChild(li);
  });
}

// Kick off the process
getLinks();
