// HEADING (h1, h2) TRANSITIONS  

document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.heading');
    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.classList.add('show-heading');
        }, index * 1300); // Adjust the delay here (multiplied by index)
    });
});












// THE PARAGRAPH TRANSITIONS (but from left to right)

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
        span.style.animationDelay = (i * 0.1) + "s"; // Adjust the delay as needed
        
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

// When the window loads, execute this function
window.onload = function () {
    // Add an event listener to the window scroll event
    window.addEventListener('scroll', function (e) {
        // Check if the vertical scroll position is greater than 100 pixels
        if (window.pageYOffset > 100) {
            // Add the 'is-scrolling' class to the header element if the condition is met
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            // Remove the 'is-scrolling' class from the header element if the condition is not met
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });
    

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const home_link = document.querySelector('.mobile-nav a[href="#"]'); // Selecting the Home link
    const center_img_elements = document.querySelectorAll('.center_img'); // Select all elements with class 'center_img'




    menu_btn.addEventListener('click',                    // EVENT LISTENER 1 For the burger button
    
    function () 
    {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');


        center_img_elements.forEach(function(element)
         {  element.classList.toggle('blur'); });


        if (menu_btn.classList.contains('is-active')) {   } // If the nav window is open, then...
           
        
    }
    
                              );


   
                              


  home_link.addEventListener('click',               // EVENT LISTENER 1 For the close navigation window by clicking home
  
  
  function (e)
  {              
  e.preventDefault(); // Prevent the default link behavior
  mobile_menu.classList.remove('is-active'); // Close the mobile menu
  menu_btn.classList.remove('is-active'); // Reset hamburger button state

  // Remove blur effect when navigation window is closed
    center_img_elements.forEach(function(element)
    {
    element.classList.remove('blur');
    });

  }

  
                            );      
    
    





                        
}






// THE SOCIAL MEDIA SMOOTH TRANSITIONS

window.addEventListener('load', function() {
    // Select the wrapper element
    const wrapper = document.querySelector('.wrapper');
    // Initially set opacity to 0 and visibility to hidden
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';
    // Show the wrapper after a delay 
    setTimeout(function() {
        // Change opacity from 0 to 1 gradually over 1 second
        wrapper.style.transition = 'opacity 1s ease, visibility 1s';
        wrapper.style.opacity = '1';
        wrapper.style.visibility = 'visible'; // Make the content visible
    }, 3000);
});






// SMOOTH TRANSITION FOR THE BUTTON

window.addEventListener('load', function() {
    // Select the wrapper element
    const wrapper = document.querySelector('.coffee-button');
    // Initially set opacity to 0 and visibility to hidden
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';
    // Show the wrapper after a delay 
    setTimeout(function() {
        // Change opacity from 0 to 1 gradually over 1 second
        wrapper.style.transition = 'opacity 1s ease, visibility 1s';
        wrapper.style.opacity = '1';
        wrapper.style.visibility = 'visible'; // Make the content visible
    }, 3500);
});




// SMOOTH TRANSITION FOR THE RIGHT ME PHOTO

window.addEventListener('load', function() {
    // Select the wrapper element
    const wrapper = document.querySelector('.image-container img');
    // Initially set opacity to 0 and visibility to hidden
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';
    // Show the wrapper after a delay 
    setTimeout(function() {
        // Change opacity from 0 to 1 gradually over 1 second
        wrapper.style.transition = 'opacity 1s ease, visibility 1s';
        wrapper.style.opacity = '1';
        wrapper.style.visibility = 'visible'; // Make the content visible
    }, 3500);
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



// DOWNLOADING THE CV

document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
        // Notify the user before downloading
        var CV = confirm("Are you sure you want to download this CV ?");
        
        // If the user confirms, proceed with downloading
        if (CV) {
            // Fetch the file content
            fetch('https://i.imgur.com/it7BCwG.png')
                .then(response => response.blob())
                .then(blob => {
                    // Create a Blob URL for the file content
                    var url = URL.createObjectURL(blob);
                    
                    // Create an anchor element
                    var link = document.createElement('a');
                    link.setAttribute('href', url);
                    link.setAttribute('download', 'CV_Remy.jpg');
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    
                    // Simulate a click on the anchor element
                    link.click();
                    
                    // Clean up by revoking the Blob URL
                    URL.revokeObjectURL(url);

                    // Disable the download button after the download is complete
                    downloadButton.disabled = true;

                    // Change the text of the button
                    downloadButton.textContent = "Downloaded successfully!";
                    
                    // Add the completed class to the button
                    downloadButton.classList.add('completed');
                    
                    // Increase the width of .coffee_button
                    var coffeeButton = document.querySelector('.coffee-button');
                    coffeeButton.style.width = '180px';
                    
                    var buymecoffee = document.querySelector('.Buy_me_coffee');
                    buymecoffee.style.paddingLeft = '13%';
                })
                .catch(error => {
                    console.error('Error occurred while downloading:', error);
                });
        }
    });
});








