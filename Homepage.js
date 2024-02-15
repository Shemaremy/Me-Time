// HEADING (h1, h2) TRANSITIONS  

document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.heading');
    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.classList.add('show-heading');
        }, index * 1300); // Adjust the delay here (multiplied by index)
    });
});












// THE PARAGRAPH TRANSITIONS

document.addEventListener("DOMContentLoaded", function() {
    // Get the paragraph element
    var paragraph = document.getElementById("animated-paragraph");
    
    // Get the text content of the paragraph
    var text = paragraph.textContent;
    
    // Clear the paragraph content
    paragraph.textContent = "";
    
    // Iterate through each character of the text
    for (var i = 0; i < text.length; i++) {
        // Create a span element for each character
        var span = document.createElement("span");
        span.textContent = text[i];
        
        // Set the animation delay for each span element
        span.style.animationDelay = (i * 0.05) + "s"; // Adjust the delay as needed
        
        // Append the span element to the paragraph
        paragraph.appendChild(span);
    }
});












// IMPLEMENTING THE LAZY METHOD FOR FAST WEB RESPONDING

document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.back');

    let options = {
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }, options);

    lazyImages.forEach(function(img) {
        observer.observe(img);
    });
});










// HAMBURGER MENU SETTINGS

window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}







 

