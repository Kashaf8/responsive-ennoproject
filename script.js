// about section/
function startCounting(targets, duration) {
    let counts = [0, 0, 0, 0];
    let steps = 100; // Total animation steps
    let incrementSizes = targets.map(target => target / steps);

    let currentStep = 0;
    let interval = setInterval(() => {
        if (currentStep >= steps) {
            clearInterval(interval);
            return;
        }
        for (let i = 0; i < targets.length; i++) {
            counts[i] += incrementSizes[i];
            document.getElementById(["clients", "projects", "support", "workers"][i]).innerText = Math.round(counts[i]);
        }
        currentStep++;
    }, duration / steps);
}

let counterSection = document.getElementById("counterSection");
let observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        counterSection.classList.add("visible");
        startCounting([232, 521, 1453, 32], 3000);
        observer.disconnect(); // Ensure it runs only once
    }
}, { threshold: 0.5 });

observer.observe(counterSection);
// portofolio section///
function filterGallery(category, event) {
    let images = document.querySelectorAll(".gallery img");
    let buttons = document.querySelectorAll("ul li");
    let gallery = document.querySelector(".gallery");

    // Remove "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "all") {
        // Show all images and reset grid
        images.forEach(img => img.classList.remove("hidden"));
        gallery.style.gridTemplateColumns = "repeat(3, 1fr)";
        gallery.style.gridAutoRows = "auto";
    } else {
        // Hide all images first
        images.forEach(img => img.classList.add("hidden"));

        // Show only selected category images
        let selectedImages = document.querySelectorAll(`.${category}`);
        selectedImages.forEach(img => img.classList.remove("hidden"));

        // Change grid to 1 row, 3 columns
        gallery.style.gridTemplateColumns = "repeat(3, 1fr)";
        gallery.style.gridAutoRows = "1fr";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let box = document.querySelector(".animated-box");

    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    box.classList.add("show");
                }
            });
        },
        { threshold: 0.5 } // Jab 50% box dikhai de tab trigger ho
    );

    observer.observe(box);
});
// responisve
document.querySelector(".menu").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});

