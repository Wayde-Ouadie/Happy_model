// global resources
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import IntroStyle from "./Intro.module.scss";
const cg = StyleNameGestion(IntroStyle);

import Content from "./Content";

import { useWindowDimension, ScrollTriggerContainer, useContainerDimensions } from "helpers/hooks";
import images from "public/intro";

import homeGsapWorkflow from "./homeGsap";

const Intro = ({ }) => {
  const dimension = useWindowDimension();

  if (!dimension) return null;

  return (
    <>
      <ScrollTriggerContainer effectGsap={homeGsapWorkflow}>
        <div className={cg(`container`, "intro", `z-10 container_gsap`)}>
          <div className={cg("content", "intro", "z-20")}>
            <Content />
          </div>
          <div className={cg("stars", "image", "z-0 stars_gsap")}>
            <div className={cg("filter")}></div>
            <Image
              src={images.stars[dimension?.breakPoint].src}
              alt="stars_happy_water"
              width={dimension.width}
              height={900}
              objectFit="cover"
            />
          </div>

          <div
            className={cg("float_container", "images", "images_container_gsap")}
          >
            <div className={cg("lune", "image", "z-10 lune_gsap")}>
              <Image
                {...images.lune[dimension?.breakPoint]}
                alt="lune happy water"
                width={
                  dimension.width /
                  images.lune[dimension?.breakPoint].coefficient
                }
              />
            </div>
            <div className={cg("cloud", "image", "z-30 cloud_gsap")}>
              <Image
                src={images.cloud[dimension?.breakPoint].src}
                width={dimension.width}
                height={dimension.height}
                alt="cloud happy water"
              />
            </div>
            <div className={cg("water", "image", "z-40 water_gsap")}>
              <Image
                src={images.water[dimension?.breakPoint].src}
                alt="water happy water"
                width={dimension.width}
                height={dimension.height}
              />
            </div>
          </div>
          <div className={cg("black", "bg", "bg_gsap")}></div>
        </div>
      </ScrollTriggerContainer>
    </>
  );
};

export default Intro;