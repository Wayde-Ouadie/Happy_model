import { useState, useRef, useEffect, useCallback, useId } from 'react';

import { useIsomorphicLayoutEffect, useSelectorGsap, useWindowDimension } from 'helpers/hooks';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ScrollTriggerContainer = ({ children, className = null, effectGsap }) => {
    // const [ ref, setRef ] = useState();
    const [q, ref] = useSelectorGsap();

    const scrollId = useId();

    const dimension = useWindowDimension();

    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.refresh();
        if(dimension) {
            effectGsap(gsap, q, ScrollTrigger, scrollId, dimension);
        }
        return () => {
            ScrollTrigger.getById(scrollId)?.kill();
        }
    }, [ref, dimension?.height, dimension?.width]);
    return (
        <>
            <span ref={ref} className={className}>{children}</span>
        </>
    )
}

export default ScrollTriggerContainer;