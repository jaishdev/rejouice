function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locoscroll();

function cursorEffect() {
  let page1Content = document.querySelector("#page1-content");
  let cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (event) {
    //   console.log(event.x, event.y);
    // cursor.style.left = event.x +"px"
    // cursor.style.top = event.y +"px"

    gsap.to("#cursor", {
      x: event.x,
      y: event.y,
    });
  });
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function takeItEffect() {
  let page5Content = document.querySelector(".page5Content");
  let takeIt = document.querySelector("#takeIt");

  page5Content.addEventListener("mousemove", function (event) {
    //   console.log(event.x, event.y);
    // cursor.style.left = event.x +"px"
    // cursor.style.top = event.y +"px"})

    gsap.to(takeIt, {
      x: event.x,
      y: event.y
    });
  });
  page5Content.addEventListener("mouseenter", function () {
    gsap.to(takeIt, {
      scale: 1,
      opacity: 1,
    });
  });
  page5Content.addEventListener("mouseleave", function () {
    gsap.to(takeIt, {
      scale: 0,
      opacity: 0,
    });
  });
}
takeItEffect();

function page2Animation() {
  gsap.from("#page2 .elem h1 ", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 60%",
      end: "top 55%",
      //   markers: true,
      scrub: 2,
    },
  });
  gsap.from("#page2-top h3 ,h4 ", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      //   markers: true,
      scrub: 2,
    },
  });
}
page2Animation();

function swipe() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
  });
}
swipe();

function loaderanime() {
  // loader=document.querySelector("#loader")
  let tl = gsap.timeline();
  tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });

  tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
  });
}
loaderanime();

