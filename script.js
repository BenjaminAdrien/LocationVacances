const faders = document.querySelectorAll('.mainpage-content');
const appearOptions = {
  threshold: .55,
  // rootMargin: '0px 0px -100px 0px'
};


const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('appear');
      ;
    } else {
      entry.target.classList.add('appear');
      // appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})



// Animation on start
const animOnStart = document.querySelector('.mp1');
animOnStart.addEventListener('animationend', function() {
  animOnStart.classList.remove('onInit');
  animOnStart.classList.add('fade-in');

})