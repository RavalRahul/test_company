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

