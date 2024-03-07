// global resources
import React from 'react'
import Image from 'next/image';

import imageEggs from 'public/eggs';

import { Power3, Power4, Power2, Power1, Power0 } from "gsap";

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import EggsOverviewStyle from './EggsOverview.module.scss'
const cg = StyleNameGestion(EggsOverviewStyle)

import { responsiveGestion } from 'helpers/responsiveValue';


import { ScrollTriggerContainer } from 'helpers/hooks';

const eggGsapWorkflow = (gsap, q, ScrollTrigger, id, dimension) => {
      if(!dimension?.breakPoint) return null;

      const rp = responsiveGestion(dimension);

      const containerEgg = q('.container_egg_gsap');

      const egg_blue = q('.egg_blue_gsap');
      const egg_red = q('.egg_red_gsap');
      const egg_purple = q('.egg_purple_gsap');
      const text = q('.text_line');

      gsap.fromTo(text, {y: 0, opacity: 1}, {y: -20, opacity: 0.5,
            scrollTrigger: {
                  trigger: text,
                  toggleActions: "restart pause complete reverse",
                  scrub: true,
            }
      })
      
      gsap.fromTo(egg_blue, {y: 0, x: 0, rotation: 0, transformOrigin: 'center left', scale: 1},{
            y: rp([{1024: 40},{0 : -40}]),
            x: rp([{1200: -40}, {0: -20}]),
            rotation: 15,
            transformOrigin: 'center center',
            scale: 1.1,
            ease: Power4.easeInOut,
            scrollTrigger: {
                  trigger: egg_blue,
                  toggleActions: "restart pause complete reverse",
                  scrub: true,
                  start: 'top bottom',
            }
      });

      gsap.fromTo(egg_red, { y: 0, x: 0, rotation: 0, transformOrigin: 'center right', scale: 1 }, {
            y: 20,
            x: rp([{1200: 50}, { 0: 20 }]),
            rotation: 40,
            transformOrigin: 'center right',
            ease: Power4.easeInOut,
            scale: 1.2,
            scrollTrigger: {
                  trigger: egg_red,
                  toggleActions: "restart pause complete reverse",
                  scrub: true,
                  start: 'top bottom'

            }
      });

      gsap.fromTo(egg_purple, { y: 0, x: 0, rotation: 0, transformOrigin: 'center bottom', scale: 1}, {
            y: rp([{1300: 120}, {0: 90}]),
            x: -20,
            rotation: -20,
            transformOrigin: 'center center',
            ease: Power0.easeInOut,
            scale: 1.1,
            scrollTrigger: {
                  trigger: egg_purple,
                  toggleActions: 'restart pause complete reverse',
                  scrub: true,
                  // markers: true,
                  start: 'top bottom'
            }
      });

}

const EggsOverview = ({ content }) => {
      
      return (
            <>
                  <ScrollTriggerContainer effectGsap={eggGsapWorkflow} >
                        <div className={cg('container', 'eggsOverview')} >
                              <ul className={cg('content', 'eggsOverview', 'container_egg_gsap')} >
                                    {content.map((e, index) => {
                                          return (
                                                <li key={`${e}_item_${index}`} className={cg('item', 'motivation', 'text_line')}>{e}</li>
                                          )
                                    })}
                                    <div className={cg('deco', 'egg')}>
                                          <div className={cg('purple', 'egg', 'egg_purple_gsap')} >
                                                <Image src={imageEggs.egg_purple.src} priority alt='Image alt purple' />
                                          </div>
                                          <div className={cg('red', 'egg', 'egg_red_gsap')} >
                                                <Image src={imageEggs.egg_red.src} priority alt='Image alt red' />
                                          </div>
                                          <div className={cg('blue', 'egg', 'egg_blue_gsap')} >
                                                <Image src={imageEggs.egg_blue.src} priority alt='Image alt purple' />
                                          </div>
                                    </div>
                              </ul>
                        </div>
                  </ScrollTriggerContainer>
                  
            </>
      )
}

export default EggsOverview;