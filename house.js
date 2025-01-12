const inputsChecked = document.querySelectorAll('.slide-input');
const firstLabel = (document
  .getElementsByClassName('slide-dot-1')
  .item(0).style.backgroundColor = 'rgb(80, 182, 182)');
inputsChecked.forEach((input) => {
  input.addEventListener('click', () => {
    const otherLabel = document.getElementsByTagName('label');
    console.log(otherLabel);
    for (let i = 0; i < otherLabel.length; i++) {
      otherLabel.item(i).style.backgroundColor = '#ccc';
    }

    const id = input.id;
    console.log(id);
    const label = document.getElementsByClassName(id).item(0);
    console.log(label);
    label.style.backgroundColor = 'rgb(80, 182, 182)';
  });
});

const sliders = document.querySelectorAll('.slide-in');
const indexItem = document.querySelectorAll('.index-item');
const appearOptions = {
  // threshold: 0.5,
  rootMargin: '-40% 0px -60% 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    const itemId = entry.target.id;
    if (entry.isIntersecting) {
      indexItem.forEach((item) => {
        item.classList.remove('active');
      });
      // console.log(entry);
      document.getElementsByClassName(itemId).item(0).classList.add('active');
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

const sectionTop = document.querySelector('.top-content');
const backTop = document.querySelector('.backToTop');

const showOptions = {
  threshold: 0,
  rootMargin: '-300px 0px 0px 0px',
};

const showOnScroll = new IntersectionObserver(function (entries, showOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      backTop.classList.add('active');
    } else {
      backTop.classList.remove('active');
      // appearOnScroll.unobserve(entry.target);
    }
  });
}, showOptions);

showOnScroll.observe(sectionTop);
