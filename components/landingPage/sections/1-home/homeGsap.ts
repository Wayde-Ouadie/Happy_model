import { Power3, Power4, Power2, Power1, Power0 } from "gsap";
import { responsiveGestion } from 'helpers/responsiveValue';


// rp([{1600: ''}, { 1200: ''}, { 0: ''}])
const homeGsapWorkflow = (gsap, q, ScrollTrigger, id, dimension) => {
  if (!dimension?.breakPoint) return null;

  const rp = responsiveGestion(dimension);
  const container = q(".container_gsap");
  const text = q(".text_gsap");
  const imagesContainer = q(".images_container_gsap");
  const stars = q(".stars_gsap");
  const lune = q(".lune_gsap");
  const cloud = q(".cloud_gsap");
  const water = q(".water_gsap");
  const bg = q(".bg_gsap");

  const setText = {};
  const setLune = { y: rp([{2000: 110},{1400: 100},{ 1200: 80 },{ 1000: 80 },{ 620: 90} ,{ 378: 92}, {0: 160}], '%')};
  const setCloud = { y: rp([{ 1950: 180 }, { 480: 200 }, { 0: 100}], 'px') };
  const setWater = {
    y: rp([
      { 2300: 900 },
      { 2000: 820 },
      { 1812: 740 },
      { 1560: 720 },
      { 1360: 660 },
      { 850: 600 },
      { 650: 610 },
      { 400: 570 },
      { 0: 510 }
    ], 'px'),
  };
  

  gsap.set(text, { ...setText });
  gsap.set(lune, { ...setLune });
  gsap.set(stars, { opacity: 0.1 });
  gsap.set(cloud, { ...setCloud });
  gsap.set(water, { ...setWater });
  gsap.set(imagesContainer, { y: 0 });
  gsap.set(bg, { opacity: 0 });


  gsap.fromTo(
    text,
    { opacity: 1 },
    {
      opacity: 0,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: text,
        start: rp([{ 0: "+25% +200px"}]),
        end: rp([{ 400: 'bottom-=30% top+=20%'} ,{0:"center+=10% top+=20%" }]),
        toggleActions: "restart pause complete reverse",
        // markers: true,
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    imagesContainer,
    { opacity: 1, y: 0 },
    {
      opacity: 0,
      y: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: imagesContainer,
        scrub: 1,
        pin: container,
      },
    }
  );

  gsap.fromTo(
    lune,
    { opacity: 1, y: setLune.y },
    {
      opacity: 0.5,
      y: rp([{1320: 140} ,{1200: 130}, {900: 110},{ 500: 100}, { 400: 100}, { 0: 220}],'%'),
      ease: Power2.easeOut,
      scrollTrigger: {
        trigger: lune,
        start: "30% +50%",
        scrub: 0.9,
        end: "+100% top",
      },
    }
  );

  gsap.fromTo(
    cloud,
    { opacity: 1, y: setCloud.y },
    {
      opacity: 0.7,
      ease: Power1.easeOut,
      y: "500px",
      scrollTrigger: {
        trigger: cloud,
        scrub: 0.6,
        start: "+20% bottom",
        end: "bottom top",
      },
    }
  );

  gsap.fromTo(
    water,
    { opacity: 1 },
    {
      opacity: 0.9,
      ease: Power4.easeIn,
      scrollTrigger: {
        trigger: water,
        start: "+20% bottom",
        end: "bottom top",
        scrub: 0.3,
      },
    }
  );

  gsap.fromTo(
    stars,
    { opacity: 0.1 },
    {
      ease: Power0.easeIn,
      opacity: 0,
      scrollTrigger: {
        trigger: stars,
        scrub: 0.2,
        // markers: true,
        end: rp([{600:"center top"}, { 0: 'top+=300px top'}]),
        start: "top top",
      },
    }
  );
  ScrollTrigger.create({
    trigger: container,
    scrub: 20,
    pin: container,
    ease: Power2.easeIn,
    toggleActions: "restart reverse complete reverse",
    id,
    end: "top top",
  });
};

export default homeGsapWorkflow;
