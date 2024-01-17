gsap.registerPlugin(ScrollTrigger);

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
    y:"150%"
  },
  {
    y:"0"
  }
);


// return () => {
//   ScrollTrigger.getAll().forEach((instance) => {
//     instance.kill();
//   });
//   gsap.killTweensOf(window);
// };


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