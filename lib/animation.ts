import { gsap } from "gsap";
import colors from "lib/identity/colors";

import { Power1 } from "gsap";

export const rollToTop = (e, color =colors.light_4, hoverColor= colors.primary_1) => {
  gsap.to(e.target, {
    keyframes: {
      "0%": { y: 0, x: 0, opacity: 1 },
      "50%": { y: -10, x: 0, color: color, opacity: 0 },
      "51%": { y: 10, x: 0, color: hoverColor, opacity: 0 },
      "100%": { y: 0, x: 0, opacity: 1 },
    },
    duratin: 0.3,
  });
};

export const rollToDown = (e, color =colors.light_4, hoverColor= colors.primary_1) => {
  gsap.to(e.target, {
    keyframes: {
      "0%": { y: 0, x: 0, opacity: 1 },
      "50%": { y: 10, x: 0, color: hoverColor, opacity: 0 },
      "51%": { y: -10, x: 0, color: color, opacity: 0 },
      "100%": { y: 0, x: 0, opacity: 1 },
    },
    duratin: 0.3,
  });
};

export const translateToDown = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 5,
    skewX: 4,
    color: colors.dark_3,
    ease: Power1.easeInOut,
  });
};

export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -5,
    skewX: 0,
    color: colors.light_1,
    ease: Power1.easeInOut,
  });
};

export const straggerReveal = (node1, node2) => {
      gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: Power3.easeInOut,
            stagger: {amount: 0.1}
      })
}

export const staggerRevealClose = (node1, node2) => {
      gsap.to([node1, node2], {
            duration: 0.8,
            height: 0,
            ease: Power3.easeInOut,
            stagger: {
                  amount: 0.07
            } 
      })
}