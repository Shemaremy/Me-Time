// HEADING TRANSITIONS  

document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.heading');
    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.classList.add('show-heading');
        }, index * 1300); // Adjust the delay here (multiplied by index)
    });
});







 

