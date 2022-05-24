const inputsChecked = document.querySelectorAll('.slide-input');
const firstLabel = document.getElementsByClassName('slide-dot-1').item(0).style.backgroundColor = 'rgb(80, 182, 182)'
inputsChecked.forEach(input => {
  input.addEventListener('click', ()=> {
    const otherLabel = document.getElementsByTagName('label');
    console.log(otherLabel)
    for (let i = 0; i < otherLabel.length; i++) {
      otherLabel.item(i).style.backgroundColor = '#ccc'
    }
    
    const id = input.id;
    console.log(id)
    const label = document.getElementsByClassName(id).item(0)
    console.log(label)
    label.style.backgroundColor = 'rgb(80, 182, 182)';
  })
})


const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
  threshold: .2,
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
    }
  })
}, appearOptions)
sliders.forEach(slider => {
  appearOnScroll.observe(slider)
})


//------------------------------------------------------------------------------------
//            footer changing color threw tarif-con
//------------------------------------------------------------------------------------
// const contacts = document.querySelectorAll('.foo-col');
// const contactBorder = document.querySelector('.footer')
// const tarif = document.querySelector('.tarif-con');
// const changeOptions = {
//   rootMargin: '-365px 0px -570px 0px'
// };

// const tarifOnScreen = new IntersectionObserver(function(entries, tarifOnScreen) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       contacts.forEach(contact => {
//         contact.style.color = 'rgb(67, 128, 128)'
//         contactBorder.style.borderColor = 'rgb(67, 128, 128)'

//       })
//     } else {
//       contacts.forEach(contact => {
//         contact.style.color = 'whitesmoke'
//         contactBorder.style.borderColor = 'whitesmoke'

//       })
//     }
//   })

// }, changeOptions)

// tarifOnScreen.observe(tarif)