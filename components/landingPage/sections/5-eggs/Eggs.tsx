// global resources
import React from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import EggsStyle from './Eggs.module.scss'
const cg = StyleNameGestion(EggsStyle);

import EggsOverview from './EggsOverview';
import EggsSlide from './EggsSlide';

import { useI18n } from 'helpers/hooks';

const Eggs = ({ }) => {
    const { sections: { eggs: { motivation, ...other} }} = useI18n();

    return (
        <>
            <div className={cg('eggs')} >
                <EggsOverview content={motivation} />
                <EggsSlide content={other} />
            </div>
        </>
    )
}

export default Eggs;