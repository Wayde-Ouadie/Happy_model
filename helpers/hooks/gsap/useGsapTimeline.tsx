import { useState, useRef, useEffect, useCallback } from 'react';

import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '../';


const useGsapTimeline = (gsapWorkflow: (tl: any, q: any, gsap?: any) => void, state= null,optionsTimeline = {}) => {
    const [ open, setOpen ] = useState(false);

    const [ ref, setRef ] = useState({ });

    const { current: tl } = useRef(gsap.timeline({ paused: true, ...optionsTimeline }));

    useIsomorphicLayoutEffect(() => {
        const q = gsap.utils.selector(ref);
        if(typeof gsapWorkflow == 'function') gsapWorkflow(tl, q, gsap);
    }, [ref, state]);

    const animate = useCallback(() => {
        open ? tl.reverse() : tl.play();
        setOpen(!open);
        return tl;
    }, [open]);

    const stock = useCallback(() => {
        return tl;
    }, []);
    return [ setRef, animate, stock ] as const;
}

export default useGsapTimeline;
