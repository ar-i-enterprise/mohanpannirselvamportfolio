const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//end Section
const Section = document.querySelector("section");
const end = Section.querySelector("h1");

//Scroll Magic
const controller = new ScrollMagic.Controller();
//scenes
const scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElemnt: intro,
  triggerHook: 0
})

  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 6000,
  triggerElemnt: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += scrollpos - delay + accelamount;
  video.currentTime = scrollpos;
}, 39.97);
