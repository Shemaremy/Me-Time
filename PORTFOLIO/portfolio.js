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




// GLOWING LINES ON H2 AS YOU SCROLL DOWN THE PAGE (CERTIFICATES CLASS)

document.addEventListener("DOMContentLoaded", function() {
    const certificateHeading = document.querySelector(".certificates");
    const lineBelow = document.querySelector(".line_below");
    let lineShown = false; // Flag to track if the line has been shown
  
    let timeoutId;
  
    function showLine() {
      lineBelow.classList.add("visible"); // Add the visible class when heading is in view
      clearTimeout(timeoutId);
      timeoutId = setTimeout(hideLine, 1000); // Hide the line after 1 second
      lineShown = true; // Set the flag to true once the line is shown
    }
  
    function hideLine() {
      lineBelow.classList.remove("visible"); // Remove the visible class when heading is out of view
    }
  
    window.addEventListener("scroll", function() {
      if (!lineShown) { // Show the line only if it hasn't been shown before
        const bounding = certificateHeading.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          showLine();
        }
      }
    });
  });
  
  
  
  












// THE AUTOSCROLL FOR MEET REMY WHEN A CARDBUTTON IS CLICKED  (CARD 1)

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".sec-button");
    
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            // Get the target section based on the button's index
            var targetIndex = Array.from(buttons).indexOf(button);
            var targetSection = document.querySelectorAll(".scroll-to-section")[targetIndex];

            // Calculate the distance to scroll
            var scrollToY = targetSection.offsetTop;

            // Smooth scroll to the element
            window.scrollTo({
                top: scrollToY,
                behavior: 'smooth'
            });
        });
    });
});



// THE AUTOSCROLL TO SERVICES SECTION WHEN NAV LINK SERVICES IS CLICKED

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".link3");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            // Get the element with class name "Sixth"
            var targetSection = document.querySelector(".Sixth");

            // Check if the target section exists
            if (targetSection) {
                // Calculate the distance to scroll
                var scrollToY = targetSection.offsetTop;

                // Smooth scroll to the element
                window.scrollTo({
                    top: scrollToY,
                    behavior: 'smooth'
                });
            }
        });
    });
});






// THIS HELPS THAT WHEN I SCROLL, I SEE THE SCROLL TOOL THAT ENABLES ME BACK AT THE TOP OF THE PAGE

window.addEventListener('scroll', function() {
    var returnToTop = document.getElementById('returnToTop');
    var hisha = document.querySelector('.navigation_links');
    var flacko = document.querySelector('.Main_class');

    var hishaRect = hisha.getBoundingClientRect();
    var flackoRect = flacko.getBoundingClientRect();

    // If Flacko is in view, show the returnToTop button, otherwise hide it
    if (flackoRect.top <= window.innerHeight && flackoRect.bottom >= 0) {
      returnToTop.style.display = 'block';
      setTimeout(function() {
        returnToTop.style.opacity = 1;
      }, 1000);
    } else {
      returnToTop.style.opacity = 0;
      setTimeout(function() {
        returnToTop.style.display = 'none';
      }, 3);
    }
  });






  // WHEN THE BUTTON IS CLICKED, WE GO BACK UP TO THE TOP PAGE

  document.addEventListener("DOMContentLoaded", function() {
    var returnToTop = document.getElementById('returnToTop');
    returnToTop.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the element with class name "Flacko"
        var targetSection = document.querySelector(".Whole_Body");

        // Check if the target section exists
        if (targetSection) {
            // Calculate the distance to scroll
            var scrollToY = targetSection.offsetTop;

            // Smooth scroll to the element
            window.scrollTo({
                top: scrollToY,
                behavior: 'smooth'
            });
        }
    });
});









