document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const newSrc = img.dataset.src;

                if (newSrc) {
                    img.src = newSrc; // Set the actual image source

                    // Wait for the image to load before adding the fade-in effect
                    img.onload = () => {
                        img.classList.add("loaded"); // Apply fade-in only after loading
                    };

                    observer.unobserve(img); // Stop observing once loaded
                }
            }
        });
    });

    images.forEach(img => observer.observe(img));

    // Display last modified date in footer
    document.getElementById("lastModified").textContent = document.lastModified;
});
