// global resources
import React, { useState, useEffect } from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import MotivationStyle from './Motivation.module.scss'
const cg = StyleNameGestion(MotivationStyle)

import { useI18n } from 'helpers/hooks'

import { Button } from 'components/uiKits';
import Back from './Back';
import { NameSvg } from './Back';
import { PAGE_LINK } from 'lib/conf/route'

import { useGoToItemLink } from 'helpers/hooks';


const Motivation = ({ }) => {
    const { sections : { motivation }} = useI18n();
    const [svgImage, setSvgImage] = useState<NameSvg>('lg');
    const { linker } = useGoToItemLink();


    useEffect(() => {
        const generateSvg = () => {
            if(innerWidth > 1024){
                setSvgImage('lg');
            }else if(innerWidth > 840){
                setSvgImage('md');
            } else if(innerWidth > 600){
                setSvgImage('md');
            } else{
                setSvgImage('none');
            } 
        }
        generateSvg();
        window.addEventListener('resize', generateSvg);
        return () => window.removeEventListener('resize', generateSvg);
    }, [])
    return (
        <>
        <div className={cg('container', 'motivation')} >
            <div className={cg('content', 'motivation')} >
                <div className={cg('title')} >
                    {motivation.title}
                </div>
                <div className={cg('content')} >
                    <p className={cg('para')} >
                        {motivation.description}
                    </p>
                    <div className={cg('button')} >
                        <Button back='white' size='lg' action={() => linker({ page: PAGE_LINK.REGISTER })}>{motivation.action}</Button>
                    </div>
                </div>
            </div>
            <div className={cg('back', 'motivation')} >
                <Back breakPoint={svgImage} />
            </div>
        </div>
            
        </>
    )
}

export default Motivation;