document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelector('.bars');
    const navWrapper = document.querySelector('.nav-wrapper');
    const closebars=document.querySelector(".bars-close");

    bars.addEventListener('click', function() {
      navWrapper.classList.toggle('active');
    });

    closebars.addEventListener('click',function () { 
        navWrapper.classList.toggle('active');
    })
    
  });

  let lastX = 0;
  let lastY = 0;
  let moving = false;
  
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    
    // Update cursor position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY + window.scrollY}px`; // Adjust for scrolling

    if (moving) {
        const diffX = e.clientX - lastX;
        const diffY = e.clientY - lastY;

        // Set the inner cursor position relative to the outer cursor
        cursorInner.style.transform = `translate(${diffX}px, ${diffY}px)`;
    }

    lastX = e.clientX;
    lastY = e.clientY;
    moving = true;
  });

  function triggerBubbleEffect() {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    cursor.classList.add('bubble');
    cursorInner.classList.add('bubble-inner');
    setTimeout(() => {
        cursor.classList.remove('bubble');
        cursorInner.classList.remove('bubble-inner');
        cursorInner.style.transform = 'translate(0, 0)'; 

    }, 500); 
}

document.addEventListener('click', (e) => {
    triggerBubbleEffect();
});

setInterval(triggerBubbleEffect, 3000);



const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("bi-plus", i !== index || !isOpen);
      ic.classList.toggle("bi-dash", i === index && !isOpen);
    });
  });
});


(function($) {
	
	"use strict";
	
	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
		    animateIn: 'zoomIn',
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 300,
			autoplay: 7000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});  		
	}
	
})(window.jQuery);