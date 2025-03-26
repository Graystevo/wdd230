window.onload = function() {
    const currentYear = new Date().getFullYear();
    
    const lastModified = document.lastModified;
    
    const footerParagraphs = document.querySelectorAll("footer p");
    
    if (footerParagraphs.length >= 3) {
        footerParagraphs[3].textContent = `Last updated: ${lastModified}`;
        footerParagraphs[3].style.color = "rgb(80, 80, 1)";
    }
};