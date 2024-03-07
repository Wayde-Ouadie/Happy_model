// global resources
import React, { useState, useCallback, useEffect , useContext, useRef, useLayoutEffect} from "react";
import Image from "next/image";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import HeaderStyle from "./Header.module.scss";
const cg = StyleNameGestion(HeaderStyle);

import { gsap } from "gsap";
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// media
import logo from "public/logo";

// helpers
import {
  useI18n,
  useWindowDimension,
  useGoToItemLink,
  useGsapTimeline
} from "helpers/hooks";

// lib
import { mainMenuItems, home } from "lib/conf/route";

// components
import { Button, SelectLang } from "@uiKits";
import MenuHumberger from "./menuHumbergerButton";
import MenuMobile from "./menuMobile";
import MainMenu from './mainMenu';

import { getBreakPointPage, ROUTE_BREAKPOINT } from 'lib/conf/route';

const WIDTH_MENU_MOBILE = 1200;
const variants = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1, y: 0, transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
      ease: 'easeOut',
      duration: 0.6,
      delay: 1
    }
  }
}

const Action = ({ content }) => {
  const { linker } = useGoToItemLink();
  return (
    <>
      <SelectLang type="small" />
      <div className={cg("actions", "nav")}>
        <Button action={() => null} size='xs'>{content.secondary}</Button>
        <Button action={() => linker({ page: getBreakPointPage(ROUTE_BREAKPOINT.REGISTER) })} size='xs' back="white" shadow={true}>
          {content.main}
        </Button>
      </div>
    </>
  );
};



import { ScrollProvider } from 'components/layout/animationConf/AnimationConf';
import { gsapWorkflowButton } from './animation/button';
 
const HeaderButtonMobileMenu = (state) => {
  const [refButton, animationButton, stockButton] = useGsapTimeline(gsapWorkflowButton, state);
  
  useEffect(() => {
    // animation
    if (state) {
      stockButton().play();
    } else {
      stockButton().reverse();
    }
  }, [state]);


  return [refButton];
}

const ScrollPosition = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#scroller',
      scroller: '#scroller',
      onUpdate: (self) => {
        setPosition(self.scroll());
      }
    });
  });

  return [position];
}
const Header = ({ children }) => {
  const { menu, header } = useI18n();
  const dimension = useWindowDimension();

  const [state, setState] = useState<boolean>(false);
  const changeState = () => setState(!state);

  const [ refButton ] = HeaderButtonMobileMenu(state);
  const [ position ] = ScrollPosition();

  const { pauseScroller, restartScroll } = useContext(ScrollProvider);

  useEffect(() => {
    if(pauseScroller && restartScroll){
      state ? pauseScroller() : restartScroll();
    }
  }, [state])
  
  useEffect(() => {
    if(dimension?.width > WIDTH_MENU_MOBILE && state){
      setState(false)
    }
  }, [dimension?.width]);

  const blurHeader = useCallback(() => position > 100 && !state ? 'blur' : null, [position, state]);


  const { linker } = useGoToItemLink();

  const refHeader = useRef();
  useEffect(() => {
    let showHeader = null;
    if(!showHeader) {
      showHeader = gsap.fromTo(refHeader.current, {yPercent: -110},{
        yPercent: 0,
        paused: true,
        duration: 0.5,
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          scroller: '#scroller',
          end:999999999999,
          onUpdate: (self) => {
            if(!self.isActive) return null;
            if(self.scroll() < 1000) return null;
            if(state) return null;
            self.direction === -1 ? showHeader?.play() : showHeader?.reverse();
          }
        }
      }).progress(1)
      if(state) showHeader?.play();
    }
    return () => showHeader = null;
  }, [refHeader.current]);

  return (
    <>
        <motion.div variants={variants} initial={'hidden'} animate={'show'}>
          <header ref={refHeader} className={cg(`container ${blurHeader()}`, "header")}>
              <div className={cg("content", "header")}>
                <div
                  className={cg(
                    `logo state_${state ? "active" : "disabled"}`,
                    "header"
                  )}
                  onClick={() => linker({ page: home.page, offsetTop: () => 0 })}
                >
                  <Image src={logo.symbol} alt="logo_happy_water" />
                </div>
                <div className={cg("nav", "header")}>
                  {dimension?.width > WIDTH_MENU_MOBILE ? (
                    <>
                      <MainMenu content={menu} />
                      <Action content={header.actions} />
                    </>
                  ) : (
                    <MenuHumberger
                      menuRef={refButton}
                      content={header.menuAction}
                      state={state}
                      changeState={changeState}
                    />
                  )}
                </div>
              </div>
          </header>
        </motion.div>

      <MenuMobile state={state} changeState={changeState} content={menu} />
      {children}
    </>
  );
};

export default Header;
