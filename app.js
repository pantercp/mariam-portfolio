
// -----------Header--------

const burgerBtn = document.querySelector('.menu-btn');
const dropMenu = document.querySelector('.drop-menu');

let menuOpen = false;
burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    burgerBtn.classList.add('open');
    dropMenu.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    dropMenu.classList.remove('open');
    menuOpen = false;
  }
});

// Intersection For Fader

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver
  (function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  },
    appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

// Carousel Buttons

const nextbtn = document.querySelector(".nextbutton");
const testimonials = document.querySelector(".testimonials");
const testCount = testimonials.childElementCount;
// const testimonials = document.querySelectorAll(".testimonial");


// for(let testimonial of testimonials){
//   // testimonial = tes
//   console.log(testimonial)
// }

nextbtn.addEventListener('click', () => {
  console.log("clicked");
  // console.log({testimonials}[0]);

});


