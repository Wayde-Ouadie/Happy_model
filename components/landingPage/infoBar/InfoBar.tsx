// global resources
import React from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import InfoBarStyle from './InfoBar.module.scss'
const cg = StyleNameGestion(InfoBarStyle)

import { ScrollTriggerContainer } from 'helpers/hooks';
import { responsiveGestion } from 'helpers/responsiveValue';

const infoBarGsapWorkflow = (gsap, q, ScrollTrigger, id, dimension) => {
    
    const container = q('.title_infoBar_gsap');
    const para = q('.title_infoBar_gsap p');
    const rp = responsiveGestion(dimension);


    let proxy = { skew: 0 };
    let skewSetter = gsap.quickSetter(container, 'skewY', 'deg');

    let clamp = gsap.utils.clamp(-6, 6);


    ScrollTrigger.create({
        id,
        start: 'top bottom',
        onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -500);

            if(Math.abs(skew) > Math.abs(proxy.skew)){
                proxy.skew = skew;
                gsap.to(proxy, {
                    skew: 0, 
                    duration: 0.6, 
                    ease: 'power2', 
                    overwrite: true, 
                    onUpdate: () => skewSetter(proxy.skew)
                })
            }
        }
    })

    gsap.set(container, { transformOrigin: 'right center', force3D: true });

    const x = rp([{ 2100: 35 },{1300: 20},{1024:40}, {500: 70}, {400: 75}, {0: 80}]);
    // const x = 0;
    gsap.set(para, { xPercent: `${x}` })
    const bottom: number = rp([{ 2100: 3 }, { 1600: 2.2 }, { 1300: 2.1 }, { 1000: 2 }, { 600: 1.6}, { 0: 1.2}]) as number;
    gsap.fromTo(para, {xPercent: `${x}`}, {xPercent: `-${x}`, scrollTrigger: {
        trigger: para,
        scrub: true,
        start: () => `bottom bottom+=${innerHeight / bottom }px`,
        end: 'top top'
    }});
}

const InfoBar = ({ title }) => {
    return (
        <>
            <div className={cg('container')} >
                
                <ScrollTriggerContainer effectGsap={infoBarGsapWorkflow}>
                    <div className={cg('content', 'slide', 'title_infoBar_gsap')} >
                        <p>
                            {title}
                        </p>
                    </div>
                </ScrollTriggerContainer>
            </div>
        </>
    )
}

export default InfoBar;