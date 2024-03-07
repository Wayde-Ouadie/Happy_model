import { transform } from 'framer-motion';
import { useState, useCallback, useRef } from 'react';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


// const useScrollPositionOfScroller = () => {
//       if(document) return null;
//       if(!document.getElementById('scroller')) return [null];
//       const st = ScrollTrigger.create({
//             scroller: '#scroller',
//       });
//       return [st.scroll(), st.scroll, st.direction] as const;
// }

const useScrollPositionOfScroller = () => {
      const scrollPosition = useCallback(() => {
            const scrollTrigger = ScrollTrigger.create({
                  scroller: '#scroller',
            }) || null;

            return [scrollTrigger.scroll(), scrollTrigger.scroll, scrollTrigger.direction];
      }, []);

      return scrollPosition;
}

export default useScrollPositionOfScroller;