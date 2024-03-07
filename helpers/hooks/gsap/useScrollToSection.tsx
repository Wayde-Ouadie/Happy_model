
import { useCallback } from 'react';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

import easing from 'easing-js';

const useScrollToSection = () => {

    const goToSection = useCallback((offsetTop) => {
    //   st.scroll(offsetTop - 60);
    const bodyScrollBar = Scrollbar.init(document.querySelector('#scroller'), { damping: 0.2, delegateTo: document, alwaysShowTracks: false });

    const direction = offsetTop == 0 ? 0 : bodyScrollBar.offset.y - offsetTop > 0 ? -1 : 1;
    bodyScrollBar.scrollTo(0, offsetTop - 100, 0, {
        callback: () => {
            gsap.fromTo('#scroller', {
                y: 5 * direction + 'vh',
                opacity: direction == 0 ? 1 : 0 // section don't accept a changement in opacity
            }, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    scroller: '#scroller',
                }
            })

        },
        easing: easing.easeOutBack,
    })

    }, []);

    return [ goToSection ];
}

export default useScrollToSection;