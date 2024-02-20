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



// SMOOTH TRANSITION FOR THE NAVIGATION LINKS

window.addEventListener('load', function() {
    // Select the wrapper element
    const wrapper = document.querySelector('.navigation_links');
    // Initially set opacity to 0 and visibility to hidden
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';
    // Show the wrapper after a delay 
    setTimeout(function() {
        // Change opacity from 0 to 1 gradually over 1 second
        wrapper.style.transition = 'opacity 1s ease, visibility 1s';
        wrapper.style.opacity = '1';
        wrapper.style.visibility = 'visible'; // Make the content visible
    }, 2000);
});




// SMOOTH TRANSITION FOR THE MIDDLE TRANSPARENT PAGE

window.addEventListener('load', function() {
    // Select the wrapper element
    const wrapper = document.querySelector('.center_img');
    // Initially set opacity to 0 and visibility to hidden
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';
    // Show the wrapper after a delay 
    setTimeout(function() {
        // Change opacity from 0 to 1 gradually over 1 second
        wrapper.style.transition = 'opacity 1s ease, visibility 1s';
        wrapper.style.opacity = '1';
        wrapper.style.visibility = 'visible'; // Make the content visible
    }, 1000);
});





// SMOOTH TRANSITION FOR THE BACK IMAGE

window.addEventListener('load', function() {
    // Select the wrapper element
    const wrapper = document.querySelector('.back_img');
    // Initially set opacity to 0 and visibility to hidden
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';
    // Show the wrapper after a delay 
    setTimeout(function() {
        // Change opacity from 0 to 1 gradually over 1 second
        wrapper.style.transition = 'opacity 1s ease, visibility 1s';
        wrapper.style.opacity = '1';
        wrapper.style.visibility = 'visible'; // Make the content visible
    }, 200);
});



// SMOOTH TRANSITION FOR THE DIV FIRST

window.addEventListener('load', function() {
    // Select the wrapper element
    const wrapper = document.querySelector('.First');
    // Initially set opacity to 0 and visibility to hidden
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';
    // Show the wrapper after a delay 
    setTimeout(function() {
        // Change opacity from 0 to 1 gradually over 1 second
        wrapper.style.transition = 'opacity 1s ease, visibility 1s';
        wrapper.style.opacity = '1';
        wrapper.style.visibility = 'visible'; // Make the content visible
    }, 1000);
});


























