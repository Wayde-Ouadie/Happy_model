import { useRef, useId, FC } from 'react'
import { useSelectorGsap, useIsomorphicLayoutEffect, useWindowDimension, useContainerDimensions } from 'helpers/hooks';
import { useRouter } from 'next/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
type params = {q: any, gsap: any, tl: any, ScrollTrigger: any, dimension?: any, scrollId?: any};

interface Props {
    children: React.ReactNode;
    styleContainer?: string;
    effectGsap: any,
    optionsTimeline?: any
}

export const AnimationScrollTriggerWithTimeline:FC<Props> = ({ children, effectGsap, styleContainer = '', optionsTimeline }) => {
    const [q, ref] = useSelectorGsap();
    const { current: tl } = useRef(gsap.timeline({ paused: true, ...optionsTimeline }));

    const scrollId = useId();
    
    
    const router = useRouter();
    const { locale } = router;
    
    const dimension = useWindowDimension();

    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.refresh();
        effectGsap(gsap, tl, q, ScrollTrigger, scrollId , dimension);
        return () => {
            ScrollTrigger.getById(scrollId).kill();
            tl.current?.kill();
        }
    }, [dimension?.height, dimension?.width, locale]);

    return (
        <>
            <span className={styleContainer} ref={ref}>
                {children}
            </span>
        </>
    )
}