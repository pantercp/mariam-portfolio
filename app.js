
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

// Accordion Buttons

const toggleBtns = document.querySelectorAll(".toggle-button");

for (let toggleBtn of toggleBtns) toggleBtn.parentElement.addEventListener('click', () => {
  toggleBtn.classList.toggle("open");
  toggleBtn.parentElement.parentElement.classList.toggle("open");
})



// Carousel Buttons

const nextbtn = document.querySelector(".nextbutton");
const testimonials = document.querySelector(".testimonials");
const testCount = testimonials.childElementCount;
// const testimonials = document.querySelectorAll(".testimonial");


nextbtn.addEventListener('click', () => {
  console.log("clicked");
  // console.log(testimonials.children[0]);
let count = 1
  
  for(let testimonial of testimonials.children){
    console.log(`item number ${count}`)
    let testimonialClass = testimonial.children[0].classList
    console.log(testimonialClass)
    console.log(testimonialClass)

    // let testimonialClass = testimonial.children[0].classList

    // if(testimonialClass.contains("prev")) {
    //   console.log("Contains Prev")
    //   console.log(testimonialClass)
    //   testimonialClass.remove("prev")
    //   testimonialClass.add("show")
    //   console.log("Changed to Show")
    //   console.log(testimonialClass)

    // } else if (testimonialClass.contains("show")){
    //   console.log("Contains Show")
    //   console.log(testimonialClass)
    //   testimonialClass.remove("show")
    //   testimonialClass.add("next")
    //   console.log("Changed to next")
    //   console.log(testimonialClass)

    // } else if (testimonialClass.contains("next")){
    //   console.log("Contains Next")
    //   console.log(testimonialClass)
    //   testimonialClass.remove("next")
    //   console.log("Removed next")
    //   console.log(testimonialClass)
    // }

    count += 1

  };

});


