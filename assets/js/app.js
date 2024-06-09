document.addEventListener('DOMContentLoaded', function() {
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



  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY + window.scrollY}px`; // Adjust for scrolling
  });

document.addEventListener('click', (e) => {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    cursor.classList.add('bubble');
    cursorInner.classList.add('bubble-inner');
    setTimeout(() => {
        cursor.classList.remove('bubble');
        cursorInner.classList.remove('bubble-inner');
    }, 500); // Reset the cursor and inner circle after the animation completes
});
