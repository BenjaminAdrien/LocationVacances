const panoramicImg = document.querySelector('.mainpage-content');
const header = document.querySelector('.header');
const disappearOptions = {
  threshold: 0,
  rootMargin: '-30px 0px 0px 0px',
};

const disappearOnScroll = new IntersectionObserver(function (
  entries,
  disappearOnScroll
) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting, 'intersecting');
    if (!entry.isIntersecting) {
      header.classList.add('appear');
    } else {
      header.classList.remove('appear');
    }
  });
},
disappearOptions);

disappearOnScroll.observe(panoramicImg);
