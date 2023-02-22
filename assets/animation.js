import { gsap, Power4, Expo, Power0 } from "gsap";

export default class Animation {
  constructor() {}

  _setElement() {
    return new Promise((resolve) => {
      resolve();
    });
  }

  animate() {
    const switchLeft = document.querySelector(".opening__switch-left");
    const switchRight = document.querySelector(".opening__switch-right");
    const leftTl = gsap.timeline({ repeat: -1 });
    const rightTl = gsap.timeline({ repeat: -1 });

    let duration = 1;
    const move_l = {
      first: "calc(100% - 24px)",
      second: "calc(100% - 50px)",
      third: "calc(100% - 80px)",
    };
    const move_r = {
      first: "calc(-100% + 24px)",
      second: "calc(-100% + 50px)",
      third: "calc(-100% + 80px)",
    };

    leftTl
      .to(switchLeft, {
        top: move_l.first,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchLeft, {
        top: move_l.first,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchLeft, {
        top: move_l.second,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchLeft, {
        top: move_l.second,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchLeft, {
        top: move_l.third,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchLeft, {
        top: move_l.third,
        ease: Power0.easeNone,
        duration: duration,
      });

    rightTl
      .to(switchRight, {
        top: move_r.first,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchRight, {
        top: move_r.first,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchRight, {
        top: move_r.second,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchRight, {
        top: move_r.second,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchRight, {
        top: move_r.third,
        ease: Power0.easeNone,
        duration: duration,
      })
      .to(switchRight, {
        top: move_r.third,
        ease: Power0.easeNone,
        duration: duration,
      });
  }

  bodyAnimate() {
    const switchBody = document.querySelector(".opening__switch-area");
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(switchBody, {
      bottom: "30%",
      ease: Power4.easeOut,
      duration: 2,
    })
      .to(switchBody, {
        bottom: "50%",
        ease: Power4.easeOut,
        duration: 2,
      })
      .to(switchBody, {
        bottom: "70%",
        ease: Power4.easeOut,
        duration: 2,
      });
  }

  init() {
    this.animate();
    this.bodyAnimate();
  }
}
