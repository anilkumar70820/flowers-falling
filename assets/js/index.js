gsap.registerPlugin(ScrollTrigger);

// const th = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#hero_section",
//     pin: true,
//     start: "top top",
//     end: "bottom center",
//     markers: false,
//     scrub: true,
//   },
// });

// th.fromTo(
//   "#hero",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//   }
// );
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#second_section",
    pin: true,
    start: "top top",
    end: "bottom top",
    markers: false,
    scrub: true,
  },
});

tl.fromTo(
  ".section_second",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

