const panoramicImg = document.querySelector(".mainpage-content");
const header = document.querySelector(".header");
const disappearOptions = {
  threshold: 0,
  rootMargin: "-30px 0px 0px 0px",
};

const disappearOnScroll = new IntersectionObserver(function (
  entries,
  disappearOnScroll
) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting, 'intersecting');
    if (!entry.isIntersecting) {
      header.classList.add("appear");
    } else {
      header.classList.remove("appear");
      // appearOnScroll.unobserve(entry.target);
    }
  });
},
disappearOptions);

disappearOnScroll.observe(panoramicImg);

// Animation on start
// const animOnStart = document.querySelector('.mp1');
// animOnStart.addEventListener('animationend', function() {
//   animOnStart.classList.remove('onInit');
//   animOnStart.classList.add('fade-in');

// })
