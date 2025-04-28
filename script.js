let faqBoxes = document.querySelectorAll(".faq-box");
let faqContents = document.querySelectorAll(".faq-content");
let faqBoxSpans = document.querySelectorAll(".faq-box-span");

faqBoxes.forEach((faqBox, index) => {
    faqBox.addEventListener("click", () => {
        // Toggle the visibility
        if (faqContents[index].classList.contains("open")) {
            // Hide the content if it's currently visible
            faqContents[index].classList.remove("open");
            faqBoxSpans[index].textContent = "➕";
        } else {
            // Show the content if it's currently hidden
            faqContents[index].classList.add("open");
            faqBoxSpans[index].textContent = "✖️";
        }
    });
});