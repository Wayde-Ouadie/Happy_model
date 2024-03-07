// global resources
import React , { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import MissionStyle from './Mission.module.scss'
const cg = StyleNameGestion(MissionStyle)

import missionImage from 'public/mission';

import { Button, Icon } from 'components/uiKits';

import { useI18n } from 'helpers/hooks';

const variantOpacity = {
      enter: {
        opacity: 0,x: 0
      },
      center: {
        opacity: 1,x: 0
      },
      exit: {
        opacity: 0,
x: 0
      },
      transition: {
        opacity: { duration: 0.8  },
        duration: 1,
      }
    }

const IconMission = ({ position }) => {
      return (
            <>
                  {position == 0 ? <Icon name='Biohazard' size='20' /> : <Icon name='BiohazardOff' size='20' />}
            </>
      )
}
const Mission = ({ }) => {
      const [position, setPosition ] = useState<number>(1);
      const { sections: { mission }} = useI18n();
      useEffect(() => {
      }, [])
      return (
            <>
                  <div className={cg('container', 'mission')} >
                        <div className={cg('container','image')} >
                                    <AnimatePresence initial={false} custom={position} mode='popLayout'>
                                          <motion.div className={cg('image')} key={position} custom={position}
                                                // @ts-ignore
                                                variants={variantOpacity} initial="enter" animate="center" exit="exit" transition={variantOpacity.transition}>
                                                <Image src={missionImage[position].src} alt={`image`}/>
                                          </motion.div>
                                    </AnimatePresence>
                        </div>
                        <div className={cg('container','content')} >
                              <div className={cg('text')} >
                                    <h2 className={cg('title', 'text')}>{mission.title}</h2>
                                    <p className={cg('description', 'text')}>{mission.description}</p>
                              </div>
                              <div className={cg('action')}>
                                    <Button shadow={true} icon={<><IconMission position={position}/></>} back='white' size='lg' action={() => setPosition(position ? 0 : 1)}>{mission.action[position]}</Button>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Mission;