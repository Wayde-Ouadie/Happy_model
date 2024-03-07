// global resources
import React, { createContext, useEffect, useRef, useState } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

export const ScrollProvider = createContext(null);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

class ModalPlugin extends ScrollbarPlugin {
  static pluginName = 'modal';

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}
Scrollbar.use(ModalPlugin, /* OverscrollPlugin */);

import { useWindowDimension } from "helpers/hooks";

// @ts-ignore
gsap.core.globals("ScrollTrigger", ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
});

const ScrollbarComponent = ({ children }) => {
  const [pauseScroller, setPauseScroller] = useState(null);
  const [restartScroll, setRestartScroller] = useState(null);

  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(document.querySelector("#scroller"), {
      damping: 0.2,
      delegateTo: document,
      alwaysShowTracks: false,
    });

    bodyScrollBar.setPosition(0, 0);

    // code for gsap and smooth scrollbar work together
    ScrollTrigger.scrollerProxy(document.querySelector("#scroller"), {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
      fixedMarkers: true,
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    bodyScrollBar.track.xAxis.element.remove();
    ScrollTrigger.defaults({ scroller: document.querySelector("#scroller") });

    const st = ScrollTrigger.create({
      scroller: document.querySelector("#scroller"),
    });

    bodyScrollBar.track.xAxis.element.remove();

    const pauseScroll = () => bodyScrollBar.updatePluginOptions('modal', { open: true });
    const restartScroll = () => bodyScrollBar.updatePluginOptions('modal', { open: false });
    setPauseScroller(() => pauseScroll);
    setRestartScroller(() => restartScroll);
    return () => { };
  }, []);

  return <><ScrollProvider.Provider value={{ pauseScroller, restartScroll }}>
    {children}
  </ScrollProvider.Provider>
  </>;
};

const AnimationConf = ({ children }) => {
  let app = useRef(null);
  const dimension = useWindowDimension();
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [dimension?.height, dimension?.width]);

  useEffect(() => {
    gsap.config({
      nullTargetWarn: false,
    });
    gsap.to(app, 0, { css: { visibility: "visible" } });
  }, []);
  return (
    <>
      <div
        className="app_container"
        id="main-container"
        ref={(el) => {
          // @ts-ignore
          app = el;
        }}
      >
        <ScrollbarComponent>{children}</ScrollbarComponent>
      </div>
      <style jsx>{`
        .app_container {
          visibility: hidden;
        }
      `}</style>
    </>
  );
};

export default AnimationConf;
