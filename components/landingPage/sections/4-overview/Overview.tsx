// global resources
import React, { useState, useCallback, useEffect, useMemo } from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import OverviewStyle from './Overview.module.scss'
const cg = StyleNameGestion(OverviewStyle)

import { useI18n } from 'helpers/hooks';
import Content from './content';
import CharacterData  from './characterData';

import { RARITY, COLORS, getNftByRarity } from 'lib/db';

import { useSwap } from 'helpers/hooks';


const initRarities: RARITY[] = Object.keys(RARITY).map((key) => RARITY[key]);

type TWidget = {
    id: '1' | '2' | '3' | '4' | '5',
    widget: 'Attribute' | 'Tags' | 'Color';
}

const widgets: TWidget[] = [
    {
        id: '1',
        widget: 'Attribute'
    },
    {
        id: '2',
        widget: 'Tags'
    },
    {
        id: '3',
        widget: 'Color',
    }
]

const Slide = ({ positionRarity, content, dataRarity, callback: { paginationRarity } }) => {
    const { position: positionColor, direction: directionColor, goToPage: goToColor } = useSwap(dataRarity.colors.length - 1);
    
    return (
        <>
            <div className={cg('slide')} >
                <Content content={content} isChange={[positionRarity, positionColor]} imageCart={dataRarity.cartByColor(dataRarity.colors[positionColor].name)} image={dataRarity.imageFramed(dataRarity.colors[positionColor].name)} characteristic={dataRarity.characteristic} pagination={paginationRarity} />
                <CharacterData content={content} widgets={widgets} isChange={[positionRarity, positionColor]} dataRarity={dataRarity}  color={dataRarity.colors[positionColor]} goToColor={goToColor}/>
            </div>
        </>
    )
}


const Overview = ({ }) => {
    const { sections: { overview: { title ,description, ...other } }} = useI18n();

    const { position: positionRarity, direction: directionRarity, paginate: paginationRarity } = useSwap(initRarities.length - 1);
    const dataRarity = useMemo(() => getNftByRarity(initRarities[positionRarity]), [positionRarity]);


    return (
        <>
            <div className={cg('container', 'overview')} >
                <div className={cg('header', 'overview')} >
                    {title}
                </div>
                <Slide positionRarity={positionRarity} content={{ description: description[initRarities[positionRarity]], ...other }} dataRarity={dataRarity} callback={{ paginationRarity }} />
            </div>
        </>
    )
}

export default Overview;