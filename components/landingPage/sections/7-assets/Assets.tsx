// global resources
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import AssetsStyle from './Assets.module.scss'
const cg = StyleNameGestion(AssetsStyle)

import { useI18n, useWindowDimension } from 'helpers/hooks';

import assetsImages from 'public/assets';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const opacityAnimation = {
    enter: {
        x: -40,
        opacity: 0,
    },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: 40,
        opacity: 0,
    },
    transition: {
        // x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        duration: 0.4,
    }
};
const ItemCell = ({ image, content, keyAnimation }) => {
    return (
        <>
            <AnimatePresence initial={false} custom={keyAnimation} mode='wait'>
                <motion.div 
                    // @ts-ignore
                    variants={opacityAnimation}
                    className={cg('container', 'item')}
                    style={{ backgroundColor: Array.isArray(image.color) ? image.color[0] : image.color }}
                    key={keyAnimation}
                    custom={keyAnimation}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "circOut", type: "tween" }}

                >
                    <div className={cg('normal', 'filter')}></div>
                    <div className={cg('radial', 'filter')}></div>
                    <div className={cg('tag', 'cart')}>{content.art}</div>
                    <div className=' h-full w-full relative' >
                        <div className={cg('image')}>
                            <Image src={image.src} alt={image.alt} priority objectFit='contain' layout='fill' />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

        </>
    )
}

export const r = (max: number, min: number = 0): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Items = ({ lengthArray, widget, keyAnimation }) => {
    return (
        <>
        <LayoutGroup id='listRarities'>
            {
                Array.apply(null, { length: lengthArray }).map((image, index) =>
                    <ItemCell keyAnimation={keyAnimation} key={'image assets index ' + index} content={widget} image={assetsImages[r(assetsImages.length - 1)]} />
                )
            }
        </LayoutGroup>
    </>)

}
const Assets = ({ }) => {
    const { sections: { assets }, widget } = useI18n();
    const [up, setUp] = useState(false);
    const [lengthArray, setNumberColAndRow] = useState(0);
    useEffect(() => {
        let numberCol = 0;
        let numberRow = 0;
        let lost = 0;
        if (innerWidth > 1280) {
            numberCol = 5;
            numberRow = 3;
            lost = 2;
        } else if (innerWidth > 678) {
            numberCol = 4;
            numberRow = 3;
        } else {
            numberCol = 3;
            numberRow = 6;
            lost = 6;
        }
        const LENGTH = numberCol * numberRow - lost;
        setNumberColAndRow(() => LENGTH);
        setTimeout(() => setUp(!up), 5000);
    }, [up]);

    const it = useMemo(() => <Items lengthArray={lengthArray} widget={widget} keyAnimation={up} />, [up, widget, lengthArray])
    return (
        <>
            <div className={cg('container', 'assets')} >
                <h2 className={cg('title', 'assets')} >
                    <div className={cg('text')} >
                        {assets.title}
                    </div>
                </h2>
                <ul className={cg('collection_row', 'assets')} >
                    {it}
                </ul>
            </div>
        </>
    )
}

export default Assets;