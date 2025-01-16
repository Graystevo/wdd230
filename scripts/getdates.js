// getdates.js

// Function to dynamically update the footer with the current year and last modified date
window.onload = function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Get the document's last modified date
    const lastModified = document.lastModified;
    
    // Select the first and second paragraphs in the footer
    const footerParagraphs = document.querySelectorAll("footer p");
    
    // Check if there are at least two paragraphs in the footer
    if (footerParagraphs.length >= 2) {
        // Set the first paragraph to the current year
        footerParagraphs[0].textContent = `© ${currentYear} - Grayden Stevens - United States`;
        
        // Set the second paragraph to the last modified date
        footerParagraphs[1].textContent = `Last updated: ${lastModified}`;
        // Apply a yellowish background color to the last modified paragraph
        footerParagraphs[1].style.color = "rgb(114, 114, 0)"; // Light yellowish
    }
};
